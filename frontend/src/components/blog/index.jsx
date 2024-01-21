import React from "react";
import StarIcon from "@mui/icons-material/Star";
import "./blog.scss";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Blog = () => {
  return (
    <>
      <div className="blog">
        <div className="containerr">
          <div className="guest-sect-intro">
            <span>BLOG</span>
            <h1>Recent Blog</h1>
          </div>
          <div className="boxs">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={20}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
            >
              <SwiperSlide>
                <div className="blog-box">
                  <div className="img">
                    <img
                      src="https://preview.colorlib.com/theme/tasty/images/insta-4.jpg"
                      alt=""
                    />
                  </div>
                  <div className="stars">July 7, 2018 Admin</div>
                  <p className="content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>

                  <div className="guest-name">Read more</div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="blog-box">
                  <div className="img">
                    <img
                      src="https://preview.colorlib.com/theme/tasty/images/insta-4.jpg"
                      alt=""
                    />
                  </div>
                  <div className="stars">July 7, 2018 Admin</div>
                  <p className="content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>

                  <div className="guest-name">Read more</div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="blog-box">
                  <div className="img">
                    <img
                      src="https://preview.colorlib.com/theme/tasty/images/insta-4.jpg"
                      alt=""
                    />
                  </div>
                  <div className="stars">July 7, 2018 Admin</div>
                  <p className="content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <div className="guest-name">Read more</div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="blog-box">
                  <div className="img">
                    <img
                      src="https://preview.colorlib.com/theme/tasty/images/insta-4.jpg"
                      alt=""
                    />
                  </div>
                  <div className="stars">July 7, 2018 Admin</div>
                  <p className="content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>

                  <div className="guest-name">Read more</div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
