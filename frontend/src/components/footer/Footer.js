import React from "react";
import "../../styles/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="container-fluid mt-5 containerFooter">
        <div className="card mx-12 containerFooter">
          <div className="row mb-4 ">
            <div className="col-md-4 col-sm-11 col-xs-11">
              <div className="footer-text pull-left">
                <div className="d-flex">
                  <img
                    className="logoReactSports"
                    src={process.env.PUBLIC_URL + `../img/Logo_react_final.png`}
                  />
                </div>
                <p className="card-text">React sports sportwear and shoes.</p>
                <div className="social mt-2 mb-3">
                  {" "}
                  <i className="fa fa-facebook-official fa-lg"></i>{" "}
                  <i className="fa fa-instagram fa-lg"></i>{" "}
                  <i className="fa fa-twitter fa-lg"></i>{" "}
                  <i className="fa fa-linkedin-square fa-lg"></i>{" "}
                  <i className="fa fa-facebook"></i>{" "}
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-1 col-xs-1 mb-2"></div>
            <div className="col-md-2 col-sm-4 col-xs-4">
              <h5 className="heading" style={{ color: "black" }}>
                Category
              </h5>
              <ul>
                <Link to="/type/footwear">
                  <li>Footwear</li>
                </Link>

                <Link to="/type/t-shirt">
                  <li>T-shirts</li>
                </Link>

                <Link to="/type/pants">
                  <li>Pants</li>
                </Link>
              </ul>
            </div>
            <div className="col-md-2 col-sm-4 col-xs-4">
              <h5 className="heading" style={{ color: "black" }}>
                Brand
              </h5>
              <ul className="card-text">
                <Link to="/brands/nike">
                  <li>Nike</li>
                </Link>
                <Link to="/brands/adidas">
                  <li>Adidas</li>
                </Link>
              </ul>
            </div>

            <div className="col-md-2 col-sm-4 col-xs-4">
              <h5 className="heading" style={{ color: "black" }}>
                Sport
              </h5>
              <ul className="card-text">
                <Link to="/sports/football">
                  <li>Footbal</li>
                </Link>
                <Link to="/sports/running">
                  <li>Running</li>
                </Link>
                <Link to="/sports/basquetball">
                  <li>Basquetball</li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="divider mb-4"> </div>
          <div className="row" style={{ fontSize: 10 }}>
            <div className="col-md-6 col-sm-6 col-xs-6">
              <div className="pull-left">
                <p>
                  <i className="fa fa-copyright"></i> 2022 React Sports
                </p>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-6">
              <div className="pull-right mr-4 d-flex policy">
                <div>Terms of Use</div>
                <div>Privacy Policy</div>
                <div>Cookie Policy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
