import React from "react";
import "../../styles/productCard.css";
import { Link } from "react-router-dom";

function ProductCard(props) {
  const prod = props.product;

  return (
    <div className="cardBody">
      <div className="container">
        <div className="card">
          <h1 className="marcaZapatilla">
            <img
              className="imgBrands"
              src={process.env.PUBLIC_URL + `/img/${prod.brand.brand}.png`}
            />
          </h1>
          <div className="imgBx">
            <img
              src={process.env.PUBLIC_URL + `/img/productImages/${prod.image}`}
            />
          </div>
          <div className="contentBx">
            <h2 className="productNameStyle">
              {prod.productName.toUpperCase()}
            </h2>
            <h3 className="productPrice">USD ${prod.price}</h3>
            <div className="size">
              <h3>Size : {prod.size}</h3>
            </div>
            <div className="color">
              <h3>Color: </h3>
              <span style={{ backgroundColor: `${prod.color}` }}></span>
            </div>
            <Link
              to={`/productDetail/${prod._id}/${prod.brand.brand}`}
              productInfo={prod}
            >
              View product
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
