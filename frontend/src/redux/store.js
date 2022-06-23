import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import productosReducer from "./productos/productos";
import userReducer from "./reducers/userReducer";
import cartReducer from "./reducers/cartReducer";
import carritoReducer from "./carrito/carrito";

const rootReducer = combineReducers({
  productosMain: productosReducer,
  userReducer,
  cartReducer,
  carritoMain: carritoReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
}
