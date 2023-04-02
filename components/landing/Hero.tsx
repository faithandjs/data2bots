import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const headers = [
  { title: "We Build scalable and secure data solutions" },
  {
    title:
      "Scale up your data teams with our league of trained and certified data consultants",
  },
  { title: "Learn from industry experts and scale up your career" },
];

// import required modules
import { EffectFade, Autoplay, Pagination } from "swiper";
import LandingHeroSwipe from "../LandingHeroSwipe";

const Hero = () => {
  return (
    <Swiper
      spaceBetween={30}
      effect={"fade"}
      // fadeEffect= {{
      //   crossFade: true,
      // }}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[EffectFade, Autoplay, Pagination]}
      className="mySwiper !overflow-visible"
    >
      {" "}
      {headers.map(({ title }, index) => (
        <SwiperSlide key={title}>
          <LandingHeroSwipe title={title} index={index} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;
