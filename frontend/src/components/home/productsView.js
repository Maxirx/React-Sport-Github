import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../styles/cardsView.css";
import ProductCard from "../cards/productCard";
import "./cssMain/main.css";
import { seachProductsMarca } from "../../redux/productos/productos";
import { useParams } from "react-router-dom";

function ProductsView() {
  const products = useSelector((state) => state.productosMain.marca);
  const usuario = useSelector((state) => state.usersMain.usuario);
  const dispatch = useDispatch();

  const id = useParams();

  useEffect(() => {
    dispatch(seachProductsMarca(id));
  }, []);
  return (
    <main>
      {products?.map((oneProducts) => {
        return <ProductCard key={oneProducts._id} product={oneProducts} />;
      })}
    </main>
  );
}

export default ProductsView;
