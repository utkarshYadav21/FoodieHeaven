import React from "react";

//swiperjs
import { Pagination, A11y, Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

//swiperjs css
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import RestaurantCard from "./RestaurantCard";

const SliderComponent = ({ slides }) => {
  return (
    <Swiper
      modules={[Pagination, A11y, Mousewheel]}
      style={{ width: "100%",paddingBottom:"1rem" }}
      spaceBetween={20}
      slidesPerView="auto"
      centeredSlides={false}
      mousewheel={{ forceToAxis: true }}
      freeMode={true} 
    >
      {slides.map((slide, index) => (
        <SwiperSlide
          key={index}
          className="cursor-pointer"
          style={{ width: "26rem" }}
        >
          <RestaurantCard restaurant={slide} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderComponent;
