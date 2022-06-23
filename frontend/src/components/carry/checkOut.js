import React, { useEffect, useState } from "react";
import "../../styles/checkOut.css";
import Table from "./Table";
import { connect, useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/productos/productos";
import { removeAllProducts } from "../../redux/carrito/carrito";
import Paypal from "./Paypal";

var localStorageID = [];
var productosEnArray = [];
var productosAMostar = [];
var productosBaseDeDatos = [];
var producAddRenderIDArray = "";

function CheckOut(props) {
  const todosLosProductos = useSelector(
    (state) => state.productosMain.products
  );
  const renderProd = [];
  const [canasta, setCanasta] = useState([]);
  const [reload, setReload] = useState(false)
  
  function clear(params) {
    dispatch(removeAllProducts())
    setCanasta([])
}

  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("carrito") !== null) {
      setCanasta(localStorage.getItem("carrito").split(" "));
    }
  }, [reload]);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  canasta?.forEach((id) => {
    renderProd.push(
      ...todosLosProductos.filter((productos) => productos._id == id)
    );
  });

  return (
    <main id="main">
      <section id="general">
        <div>
          <table id="tabla">
            <thead id="encabezado">
              <tr>
                <th>Producto</th>
                <th>Precio</th>
              </tr>
            </thead>
            <Table productosAMostar={renderProd} reload={reload} setReload={setReload} />
          </table>
        </div>
        <div id="botones">
          <button
            onClick={() => {
              clear()
            }}
            id="clear"
          >
            Clear
          </button>
        </div>
      </section>

      <div id="CarritoDetalle"></div>
      <div style={{ width: "50%" }}>
        <Paypal productosAMostar={renderProd} />
      </div>
    </main>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.cartReducer.cart,
    products: state.productosMain.products,
  };
};

export default connect(mapStateToProps, null)(CheckOut);
