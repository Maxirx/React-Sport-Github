const dataInicial = {
  carritoUser: [],
  cantProducts: 0,
  estadoCarrito: [],
};

export default function carritoReducer(state = dataInicial, action) {
  switch (action.type) {
    case AGREGAR_PRODUCTO:
      return {
        ...state,
        carritoUser: [...state.carritoUser, action.payload],
        cantProducts: state.carritoUser.length + 1,
      };
    case MANTENER_ESTADO:
      return {
        ...state,
        estadoCarrito: action.payload,
      };
    case ELIMINAR_PRODUCTOS:
      return{
        ...state,
        carritoUser: action.payload
      };
    case ELIMINAR_PRODUCTO:
      return{
        ...state,
        carritoUser: [...state.carritoUser, action.payload],
        cantProducts: state.carritoUser.length - 1,
      }
    default:
      return state;
  }
}

const AGREGAR_PRODUCTO = "AGREGAR_PRODUCTO";
const MANTENER_ESTADO = "MANTENER_ESTADO";
const ELIMINAR_PRODUCTOS = "ELIMINAR_PRODUCTOS";
const ELIMINAR_PRODUCTO = "ELIMINAR_PRODUCTO";
export const addOneProduc = (comeProduc) => (dispatch, getState) => {
  if (localStorage.getItem("carrito") !== null) {
    const acumular = localStorage.getItem("carrito");
    localStorage.setItem("carrito", comeProduc + " " + acumular);
  } else {
    localStorage.setItem("carrito", comeProduc);
  }
  dispatch({ type: AGREGAR_PRODUCTO, payload: comeProduc });
};

export const removeAllProducts = () => (dispatch, getState) =>{
  localStorage.removeItem("carrito")
  dispatch({type: ELIMINAR_PRODUCTOS, payload: null})
}

export const removeOneProduct = (prodId) => (dispatch, getState) =>{
  var lStorage = lStorage.filter((id) => id !== prodId);
  localStorage.setItem("carrito", lStorage.join(" ").toString());
  dispatch({type: ELIMINAR_PRODUCTO, payload: lStorage})
}

export const mantenerEstado = (unArrayProduct) => (dispatch, getState) => {
  console.log(unArrayProduct);

  dispatch({ type: MANTENER_ESTADO, payload: unArrayProduct });
};
