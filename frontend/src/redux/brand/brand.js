import axios from "axios";

const dataInicial = {
  brand: [],
};

export default function brandReducer(state = dataInicial, action) {
  switch (action.type) {
    case GET_ALL_BRAND:
      return {
        ...state,
        brand: action.payload,
      };
    default:
      return state;
  }
}
const URLB = "http://localhost:4000/api";
const GET_ALL_BRAND = "GET_ALL_BRAND";

export const getAllbrand = () => async (dispatch, getState) => {
  const res = await axios.get(URLB + "/allBrand");
  const brandAll = res.data.respuesta.brandLocal;
  dispatch({ type: GET_ALL_BRAND, payload: brandAll });
};
