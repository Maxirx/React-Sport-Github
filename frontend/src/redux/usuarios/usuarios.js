import axios from "axios";

//constantes
const dataInicial = {
  usuario: null,
};

//types
const USUARIO = "USUARIO";
const MENSAJE = "MENSAJE";
const SELECCIONAR_PAIS = "SELECCIONAR_PAIS";
//reducer
export default function usuarioReducer(state = dataInicial, action) {
  console.log(state);
  switch (action.type) {
    case USUARIO:
      return {
        ...state,
        usuario: action.payload,
      };

    default:
      return state;
  }
}

//acciones

export const registrarUsuario = (dataUsuario) => async (dispatch, getState) => {
  const respuesta = await axios.post(
    "http://localhost:4000/api/autorizacion/signUp",
    { dataUsuario }
  ); //datos para registrarse
  dispatch({ type: MENSAJE, payload: respuesta.data });
};

export const iniciarSesion = (dataUsuario) => async (dispatch, getState) => {
  const usuario = await axios.post(
    "http://localhost:4000/api/autorizacion/signIn",
    { dataUsuario }
  ); //mandar contra y mail
  console.log(usuario.data);
  if (usuario.data.success) {
    localStorage.setItem("token", usuario.data.response.token);
    dispatch({ type: USUARIO, payload: usuario.data.response.usuarioData });
  } else {
    console.log("hola");
  }
};

export const cerrarSesion = (sesionCerrada) => async (dispatch, getState) => {
  const usuario = axios.post("http://localhost:4000/api/autorizacion/signOut", {
    sesionCerrada,
  }); //mandar mail
  console.log(usuario);
  localStorage.removeItem("token");
  dispatch({ type: USUARIO, payload: null });
};

export const verificarToken = (token) => async (dispatch, getState) => {
  const user = await axios.get(
    "https://react-sports-5.herokuapp.com/autorizacion/signInToken",
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );

  if (user.data.success) {
    dispatch({ type: USUARIO, payload: user.data.response });
    dispatch({
      type: MENSAJE,
      payload: user.data.message,
    });
  } else {
    localStorage.removeItem("token");
  }
};

export const seleccionarUnPais = (unPais) => (dispatch, getState) => {
  dataInicial.paisesDisponibles.indexOf(unPais)
    ? dispatch({ type: SELECCIONAR_PAIS, payload: unPais })
    : dispatch({ type: SELECCIONAR_PAIS, payload: null });
};
