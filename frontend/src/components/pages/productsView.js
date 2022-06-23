import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "../cards/productCard";
import { getAllProducts } from "../../redux/productos/productos";

function ProductsView() {
  window.scrollTo({ top: 0, behavior: "smooth" });
  const allProducts = useSelector((state) => state.productosMain.products);
  const dispatch = useDispatch();
  const [filterSelected] = Object.keys(useParams());
  const [filterValue] = Object.values(useParams());
  const filteredProducts = [];
  const { brand } = useParams();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  switch (filterSelected) {
    case "brand":
      filteredProducts.push(
        allProducts.filter((element) => element.brand.brand == filterValue)
      );
      break;
    case "type":
      filteredProducts.push(
        allProducts.filter((element) => element.type == filterValue)
      );
      break;
    case "sport":
      filteredProducts.push(
        allProducts.filter((element) => element.sport == filterValue)
      );
      break;
    case "gender":
      filteredProducts.push(
        allProducts.filter((element) => element.genre == filterValue)
      );
      break;
  }

  return (
    <main>
      <section>
        {filteredProducts[0]?.map((element, index) => (
          <ProductCard key={index} product={element} />
        ))}
      </section>
    </main>
  );
}

export default ProductsView;
