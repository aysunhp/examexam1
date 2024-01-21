import React from "react";
import StarIcon from "@mui/icons-material/Star";
import "./guests.scss";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Guests = () => {
  return (
    <>
      <div className="guests">
        <div className="containerr">
          <div className="guest-sect-intro">
            <span>Guests Says</span>
            <h1>Our Satisfied Guests says</h1>
          </div>
          <div className="guest-box">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={20}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
            >
              <SwiperSlide>
                <div className="box">
                  <div className="img">
                    <img
                      src="https://preview.colorlib.com/theme/tasty/images/person_1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="stars">
                    <StarIcon
                      style={{ color: "rgb(255,180,0)", fontSize: "17px" }}
                    />
                    <StarIcon
                      style={{ color: "rgb(255,180,0)", fontSize: "17px" }}
                    />
                    <StarIcon
                      style={{ color: "rgb(255,180,0)", fontSize: "17px" }}
                    />
                    <StarIcon
                      style={{ color: "rgb(255,180,0)", fontSize: "17px" }}
                    />
                    <StarHalfIcon
                      style={{ color: "rgb(255,180,0)", fontSize: "17px" }}
                    />
                  </div>
                  <p className="content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Error praesentium maxime nulla, sapiente vel dignissimos eum
                    labore, qui ipsum, esse nesciunt odio?
                  </p>

                  <div className="guest-name">Dennis Green</div>
                  <div className="guest-from">Guest from Italy</div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="box">
                  <div className="img">
                    <img
                      src="https://preview.colorlib.com/theme/tasty/images/person_1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="stars">
                    <StarIcon
                      style={{ color: "rgb(255,180,0)", fontSize: "17px" }}
                    />
                    <StarIcon
                      style={{ color: "rgb(255,180,0)", fontSize: "17px" }}
                    />
                    <StarIcon
                      style={{ color: "rgb(255,180,0)", fontSize: "17px" }}
                    />
                    <StarIcon
                      style={{ color: "rgb(255,180,0)", fontSize: "17px" }}
                    />
                    <StarHalfIcon
                      style={{ color: "rgb(255,180,0)", fontSize: "17px" }}
                    />
                  </div>
                  <p className="content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Error praesentium maxime nulla, sapiente vel dignissimos eum
                    labore, qui ipsum, esse nesciunt odio?
                  </p>

                  <div className="guest-name">Dennis Green</div>
                  <div className="guest-from">Guest from Italy</div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="box">
                  <div className="img">
                    <img
                      src="https://preview.colorlib.com/theme/tasty/images/person_1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="stars">
                    <StarIcon
                      style={{ color: "rgb(255,180,0)", fontSize: "17px" }}
                    />
                    <StarIcon
                      style={{ color: "rgb(255,180,0)", fontSize: "17px" }}
                    />
                    <StarIcon
                      style={{ color: "rgb(255,180,0)", fontSize: "17px" }}
                    />
                    <StarIcon
                      style={{ color: "rgb(255,180,0)", fontSize: "17px" }}
                    />
                    <StarHalfIcon
                      style={{ color: "rgb(255,180,0)", fontSize: "17px" }}
                    />
                  </div>
                  <p className="content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Error praesentium maxime nulla, sapiente vel dignissimos eum
                    labore, qui ipsum, esse nesciunt odio?
                  </p>

                  <div className="guest-name">Dennis Green</div>
                  <div className="guest-from">Guest from Italy</div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="box">
                  <div className="img">
                    <img
                      src="https://preview.colorlib.com/theme/tasty/images/person_1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="stars">
                    <StarIcon
                      style={{ color: "rgb(255,180,0)", fontSize: "17px" }}
                    />
                    <StarIcon
                      style={{ color: "rgb(255,180,0)", fontSize: "17px" }}
                    />
                    <StarIcon
                      style={{ color: "rgb(255,180,0)", fontSize: "17px" }}
                    />
                    <StarIcon
                      style={{ color: "rgb(255,180,0)", fontSize: "17px" }}
                    />
                    <StarHalfIcon
                      style={{ color: "rgb(255,180,0)", fontSize: "17px" }}
                    />
                  </div>
                  <p className="content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Error praesentium maxime nulla, sapiente vel dignissimos eum
                    labore, qui ipsum, esse nesciunt odio?
                  </p>

                  <div className="guest-name">Dennis Green</div>
                  <div className="guest-from">Guest from Italy</div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="box">
                  <div className="img">
                    <img
                      src="https://preview.colorlib.com/theme/tasty/images/person_1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="stars">
                    <StarIcon
                      style={{ color: "rgb(255,180,0)", fontSize: "17px" }}
                    />
                    <StarIcon
                      style={{ color: "rgb(255,180,0)", fontSize: "17px" }}
                    />
                    <StarIcon
                      style={{ color: "rgb(255,180,0)", fontSize: "17px" }}
                    />
                    <StarIcon
                      style={{ color: "rgb(255,180,0)", fontSize: "17px" }}
                    />
                    <StarHalfIcon
                      style={{ color: "rgb(255,180,0)", fontSize: "17px" }}
                    />
                  </div>
                  <p className="content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Error praesentium maxime nulla, sapiente vel dignissimos eum
                    labore, qui ipsum, esse nesciunt odio?
                  </p>

                  <div className="guest-name">Dennis Green</div>
                  <div className="guest-from">Guest from Italy</div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="box">
                  <div className="img">
                    <img
                      src="https://preview.colorlib.com/theme/tasty/images/person_1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="stars">
                    <StarIcon
                      style={{ color: "rgb(255,180,0)", fontSize: "17px" }}
                    />
                    <StarIcon
                      style={{ color: "rgb(255,180,0)", fontSize: "17px" }}
                    />
                    <StarIcon
                      style={{ color: "rgb(255,180,0)", fontSize: "17px" }}
                    />
                    <StarIcon
                      style={{ color: "rgb(255,180,0)", fontSize: "17px" }}
                    />
                    <StarHalfIcon
                      style={{ color: "rgb(255,180,0)", fontSize: "17px" }}
                    />
                  </div>
                  <p className="content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Error praesentium maxime nulla, sapiente vel dignissimos eum
                    labore, qui ipsum, esse nesciunt odio?
                  </p>

                  <div className="guest-name">Dennis Green</div>
                  <div className="guest-from">Guest from Italy</div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="box">
                  <div className="img">
                    <img
                      src="https://preview.colorlib.com/theme/tasty/images/person_1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="stars">
                    <StarIcon
                      style={{ color: "rgb(255,180,0)", fontSize: "17px" }}
                    />
                    <StarIcon
                      style={{ color: "rgb(255,180,0)", fontSize: "17px" }}
                    />
                    <StarIcon
                      style={{ color: "rgb(255,180,0)", fontSize: "17px" }}
                    />
                    <StarIcon
                      style={{ color: "rgb(255,180,0)", fontSize: "17px" }}
                    />
                    <StarHalfIcon
                      style={{ color: "rgb(255,180,0)", fontSize: "17px" }}
                    />
                  </div>
                  <p className="content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Error praesentium maxime nulla, sapiente vel dignissimos eum
                    labore, qui ipsum, esse nesciunt odio?
                  </p>

                  <div className="guest-name">Dennis Green</div>
                  <div className="guest-from">Guest from Italy</div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Guests;
