import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import ProjectImg1 from "../assets/images/bigboom.avif";
import ProjectImg2 from "../assets/images/cooltown.jpg";
import ProjectImg3 from "../assets/images/Tictactoe.webp";
import Aos from "aos";

const ShowRoom = () => {
  Aos.init();
  return (
    <section id="show-room">
      <h2 data-aos="zoom-in" data-aos-duration="1000">
        SHOWROOM
      </h2>
      <Swiper
        data-aos="fade-right"
        data-aos-duration="1200"
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        navigation
        breakpoints={{
          200: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          600: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          900: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          1200: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="my-slide">
          <div className="my-card">
            <div className="item">
              <img src={ProjectImg1} alt="" />
            </div>
            <div className="content">
              <h5>E-commerce website</h5>
              <p>
                You can trust me to build and develop e-commerce sites from
                scratch. Source code is on my Github
              </p>
              <a
                className="button"
                target="blank"
                href="https://github.com/Aslan0N/E-commerce-BigBoom.git"
              >
                Visit
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="my-slide">
          <div className="my-card">
            <div className="item">
              <img src={ProjectImg2} alt="" />
            </div>
            <div className="content">
              <h5>E-commerce website</h5>
              <p>
                You can trust me to build and develop e-commerce sites from
                scratch. Source code is on my Github
              </p>
              <a
                className="button"
                target="blank"
                href="https://github.com/Aslan0N/E-commerce-CoolTown.git"
              >
                Visit
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="my-slide">
          <div className="my-card">
            <div className="item">
              <img className="img" src={ProjectImg3} alt="" />
            </div>
            <div className="content">
              <h5>TİC TAC TOE GAME</h5>
              <p>
                You can improve yourself by playing the game. I wish you success
                in this fun game. You can find the source code on my GitHub.
              </p>
              <a
                className="button"
                target="blank"
                href="https://github.com/Aslan0N/Tic-Tac-Toe.git"
              >
                Visit
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default ShowRoom;
