import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "./hero.scss";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Hero = () => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className="hero hero1">
            <div className="containerr">
              <h1>Tasty & Delicious Food</h1>
              <button>Book a table</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero hero2">
            <div className="containerr">
              <h1>Tasty & Delicious Food</h1>
              <button>Book a table</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero hero3">
            <div className="containerr">
              <h1>Tasty & Delicious Food</h1>
              <button>Book a table</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Hero;
