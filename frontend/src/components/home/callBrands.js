import React from "react";
import "../../styles/callBrands.css";
import "animate.css";
import { Link as LinkRouter } from "react-router-dom";

const CallBrands = () => {
  return (
    <div className="containerCallBrands">
      <p className="tittleCallsBrands">OUR BEST BRANDS</p>
      <div className="containerImgCalls">
        <LinkRouter to="/brands/Nike" className="linkResponsive">
          <img
            className="imgcallsBrands animate__swing"
            src={process.env.PUBLIC_URL + `../img/nikeCall.png`}
          />
        </LinkRouter>
        <LinkRouter to="/brands/Adidas" className="linkResponsive">
          <img
            className="imgcallsBrands"
            src={process.env.PUBLIC_URL + `../img/adidasCall.png`}
          />
        </LinkRouter>
        <LinkRouter to="/brands/Puma" className="linkResponsive">
          <img
            className="imgcallsBrands"
            src={process.env.PUBLIC_URL + `../img/pumaCall.png`}
          />
        </LinkRouter>
      </div>
    </div>
  );
};

export default CallBrands;
