import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import bg from "../../assets/bg.svg";
import bg2 from "../../assets/bg2.svg";
import logo from "../../assets/Logo.png";

const images = [
  { src: bg, alt: "Image 1" },
  { src: bg2, alt: "Image 2" },
];

const CarouselComponent = () => {
  return (
    <div className="relative text-center">
      <Swiper
        modules={[Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-[600px] object-cover sm:h-[500px] md:h-[400px] lg:h-[600px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10">
        <img
          src={logo}
          alt="Logo"
          className="w-[150px] sm:w-[120px] md:w-[100px] lg:w-[200px] mt-4"
        />
      </div>
    </div>
  );
};

export default CarouselComponent;
