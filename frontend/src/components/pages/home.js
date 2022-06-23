import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "swiper/css";
import "swiper/css/navigation";
import "../../styles/home.css";
import Carousel from "../home/carousel";
import CallBrands from "../home/callBrands";
import CarouselProducts from "../home/carouselsProducts";

const Home = (props) => {
  return (
    <>
      <Carousel />
      <CallBrands />
      <CarouselProducts />
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
  };
};

export default connect(mapStateToProps, null)(Home);
