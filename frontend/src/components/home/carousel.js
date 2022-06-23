import React from "react";
import "../../styles/detalleProducto.css";
import "swiper/css";
import "swiper/css/navigation";
import "../../styles/home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link, useParams } from "react-router-dom";

function Carousel() {
  return (
    <div>
      <div className="carouselContainer">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Link to="/brands/Nike" className="linkCarouselSup">
              <img
                className="imgCarousel"
                src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1824,c_limit/85b1cd26-23ff-44a1-80b6-360ce24cf5ed/sitio-web-oficial-de-nike.jpg"
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/type/Qatar%202022" className="linkCarouselSup">
              <img
                className="imgCarousel"
                src={
                  process.env.PUBLIC_URL + `../img/imagen_carousel_messi.png`
                }
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/brands/Puma" className="linkCarouselSup">
              <img
                className="imgCarousel coreanos"
                src={process.env.PUBLIC_URL + `../img/coreanos.jpg`}
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/brands/New%20Balance" className="linkCarouselSup">
              <img
                className="imgCarousel"
                src="https://media.revistagq.com/photos/615488cc313fc2aeb540ea88/master/w_1600,c_limit/S221_SELL_IN_ML574BA2_Pack_KeyVisual_1_17x11_RGB.jpg"
              />
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Carousel;
