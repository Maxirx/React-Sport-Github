import React, { useEffect, useState } from "react";
import "../../styles/detalleProducto.css";
import { connect, useDispatch } from "react-redux";
import { searchProductById } from "../../redux/productos/productos";
import { Link, useParams } from "react-router-dom";
import productsActions from "../../redux/actions/productsActions";
import { addOneProduc } from "../../redux/carrito/carrito";

function DetalleProducto(props) {
  const dispatch = useDispatch();
  window.scrollTo({ top: 0, behavior: "smooth" });
  console.log(useParams());
  const { id, brand } = useParams();
  const productId = id;
  const [reload, setReload] = useState(false);
  const [currentProduct, setCurrentProduct] = useState([]);

  useEffect(() => {
    searchProductById(productId).then((res) => setCurrentProduct(res.response));
  }, []);

  console.log(currentProduct);
  async function addCart(event) {
    props.addToCart(event.target.id);
  }
  const scremProduc = (oneID) => {
    dispatch(addOneProduc(oneID));
  };
  return (
    <div className="mainHtml">
      <div className="contenedorDetalleProducto">
        <div className="detalleProductoIzquierda">
          <div className="detalleProductoContenedorRuta">
            <button
              className="botonAtras"
              onClick={() => window.history.back()}
            >
              <img
                className="logoCarritoBoton"
                src={process.env.PUBLIC_URL + "/img/atras.png"}
              />
            </button>
            <Link to="/">
              <a>HOME</a>
            </Link>
            <img
              className="logoCarritoBoton"
              src={process.env.PUBLIC_URL + "/img/siguiente.png"}
            />
            <p>{currentProduct?.productName?.toUpperCase()}</p>
          </div>
          <div className="detalleProductoContenedorFotosProductos">
            <div className="contenedorLogoProducto">
              {
                <img
                  className="logoProducto"
                  src={process.env.PUBLIC_URL + `/img/${brand}.png`}
                />
              }
            </div>
            <img
              className="fotoProducto"
              src={
                process.env.PUBLIC_URL +
                `/img/productImages/${currentProduct?.image}`
              }
            />
          </div>
        </div>
        <div className="detalleProductoDerecha">
          <div>
            <div className="ternarioStockProducto">
              {currentProduct?.stock <= 5 ? (
                <>
                  {currentProduct?.stock == 0 ? (
                    <h3 className="outOfStock">SOLD OUT</h3>
                  ) : (
                    <h3 className="fewUnitsRemaining">FEW UNITS</h3>
                  )}
                </>
              ) : (
                <></>
              )}
            </div>
            <div className="headerProducto">
              <h2 className="productName">
                {currentProduct?.productName?.toUpperCase()}
              </h2>
              <div className="containerDinero">
                <h4 className="price">USD ${currentProduct?.price}</h4>
              </div>
              <div className="containerMetodosDePago">
                <img
                  className="logoCarritoBoton"
                  src={process.env.PUBLIC_URL + "/img/paypal.png"}
                />
                <img
                  className="logoCarritoBoton"
                  src={process.env.PUBLIC_URL + "/img/visa.png"}
                />
                <img
                  className="logoCarritoBoton"
                  src={process.env.PUBLIC_URL + "/img/american_express.png"}
                />
              </div>
            </div>
            <div className="colorProducto">
              <p>COLOR:</p>
              <div
                className="circuloColorYSize"
                style={{ backgroundColor: `${currentProduct?.color}` }}
              ></div>
            </div>
            <div className="SizeProducto">
              <p>SIZE:</p>
              <div className="circuloColorYSize">{currentProduct?.size}</div>
            </div>
          </div>
          <div className="detalleProductoCarrito">
            {currentProduct.stock !== 0 && props.user ? (
              <>
                <button id={productId} onClick={() => scremProduc(id)}>
                  addWilson
                </button>
              </>
            ) : (
              <></>
            )}
          </div>
          <div className="divGoToCartOrContinueShopping">
            {currentProduct?.stock !== 0 && props.user ? (
              <>
                <Link to="/checkout" className="contenedorComprarAhora">
                  <button
                    className="botonComprarAhora"
                    id={productId}
                    onClick={() => scremProduc(id)}
                  >
                    <img
                      className="logoCarritoBoton"
                      src={process.env.PUBLIC_URL + "/img/bolsa.png"}
                    />
                    <p className="addToCart">BUY NOW</p>
                    <img
                      className="logoCarritoBoton"
                      src={process.env.PUBLIC_URL + "/img/siguiente.png"}
                    />
                  </button>
                </Link>
              </>
            ) : (
              <></>
            )}
          </div>
          <div className="containerAdmin">
            {props.user?.isAdmin === true && (
              <>
                <Link className="rutaAdmin" to={`/adminView/${productId}`}>
                  <button className="botonAdmin">
                    <p className="tittleAdmin">ADMIN ACTIONS</p>
                    <img
                      src={process.env.PUBLIC_URL + "/img/cargar_producto.png"}
                    />
                    <img
                      src={
                        process.env.PUBLIC_URL + "/img/eliminar_producto.png"
                      }
                    />
                    <img
                      src={process.env.PUBLIC_URL + "/img/editar_producto.png"}
                    />
                  </button>
                </Link>
              </>
            )}
          </div>
          <div className="containerEnvios">
            <div className="containerTextoEnvios">
              <div className="camionYTitulo">
                <img src={process.env.PUBLIC_URL + "/img/camion.png"} />
                <p>FREE SHIPING TO ANY STATE</p>
              </div>
              <h4 className="precioEnvio">ON ORDERS OVER $59.99</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="contenedorDescripcionProducto">
        <div className="contenedorDescriptionIzquierdo">
          <div className="description">
            <p>DESCRIPTION:</p>
            <h4 className="precioEnvio">{currentProduct?.description}</h4>
          </div>
        </div>
        <div className="contenedorDescriptionDerecho"></div>
      </div>
    </div>
  );
}
const mapDispatchToProps = {
  deleteProduct: productsActions.deleteProduct,
};
const mapStateToProps = (state) => {
  return {
    cart: state.cartReducer.cart,
    product: state.productosMain.product,
    user: state.userReducer.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetalleProducto);
