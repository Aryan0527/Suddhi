import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bg from "../../assets/bg.svg";
import bg2 from "../../assets/bg2.svg";
import logo from "../../assets/Logo.png";

const images = [
  { src: bg, alt: "Image 1" },
  { src: bg2, alt: "Image 2" },
];

const CarouselComponent = () => {
  return (
    <div style={{ position: "relative", textAlign: "center" }}>
      <Carousel
        showArrows={false}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        dynamicHeight={true}
        swipeable={true}
        interval={2000}
      >
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </Carousel>
      <img
        src={logo}
        alt="Logo"
        style={{
          position: "absolute",
          top: "15%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
        }}
      />
    </div>
  );
};

export default CarouselComponent;
