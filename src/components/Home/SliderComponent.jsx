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
    <div className="mx-auto w-full ">
      <Swiper
        modules={[Pagination, A11y, Mousewheel]}
        style={{ width: "70%", height: "16.5rem" }}
        spaceBetween={20} // Add some spacing between slides
        slidesPerView="2" // Adjust to the number of visible slides
        centeredSlides={false} // Change to true if you want centered alignment
        mousewheel={{ forceToAxis: true }}
        freeMode={true} // Allow free movement of slides
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="cursor-pointer">
            <RestaurantCard restaurant={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderComponent;
