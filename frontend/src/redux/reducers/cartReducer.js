const initialState = {
  cart: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      let cart = [...state.cart];
      cart.push(action.payload);
      return {
        ...state,
        cart,
      };

    default:
      return state;
  }
};

export const getTotal = (carritoUser) => {
  console.log(carritoUser);
  let Total = carritoUser?.reduce((amount, item) => item.price + amount, 0);
  console.log(Total);
  return Total;
};

export default cartReducer;
