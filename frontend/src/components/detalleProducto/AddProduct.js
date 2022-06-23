import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOneProduc } from "../../redux/carrito/carrito";

const AddProduct = (props) => {
  const products = useSelector((state) => state.productosMain.products);
  const [addProduct, setAddProduct] = useState({});
  const [stock, setStock] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    setAddProduct(products?.find((unProduct) => unProduct._id === props.id));
  }, []);

  const scremProduc = (oneProduc) => {
    dispatch(addOneProduc(oneProduc._id));
  };
  return <button onClick={() => scremProduc(addProduct)}>Add to cart</button>;
};

export default AddProduct;
