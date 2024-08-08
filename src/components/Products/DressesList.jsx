import React from "react";
import { dress_products } from "../../utils/dress_products";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import CountdownTimer from "../CountdownTimer";
import { MdOutlineTimer } from "react-icons/md";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

const DressesList = () => {
  return (
    <div className="text-start py-8 relative bottom-10">
      <div className="flex flex-col lg:flex-row lg:items-center w-full">
        {dress_products
          .filter((ele, i) => i < 1)
          .map((product, index) => (
            <div
              key={index}
              className="w-full lg:w-1/4 mb-4 lg:mb-0 lg:flex lg:justify-start"
            >
              <div className="p-4 m-2 w-full lg:w-64 relative lg:text-left">
                <h2 className="text-xl font-semibold mt-[12px] ml-[18px] absolute top-0 left-0 lg:static lg:ml-0 lg:mt-0 z-10">
                  Dresses
                </h2>
                <img
                  src={product.imgSrc}
                  alt={product.name}
                  className="w-full h-56 lg:h-3/6 mb-4 mx-auto lg:mx-0"
                />
                <div className="text-center lg:text-left">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="my-2">
                    <span className="text-green-500 font-bold">
                      INR {product.price}
                    </span>
                    <span className="line-through ml-2 text-gray-500">
                      {product.originalPrice}
                    </span>
                    <span className="text-red-500 ml-2">
                      {product.discount}% off
                    </span>
                  </p>
                  <p>Sizes: {product.sizes.join(", ")}</p>
                  <p className="flex justify-center lg:justify-start items-center font-semibold">
                    <MdOutlineTimer className="text-xl lg:text-2xl" />
                    <CountdownTimer initialTime={600} />
                  </p>
                </div>
              </div>
            </div>
          ))}

        <div className="w-full lg:w-3/4">
          <Swiper
            loop={true}
            loopAdditionSlides={3}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            autoplay={{
              delay: 2200,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay]}
          >
            {dress_products.map((product, index) => (
              <SwiperSlide key={index}>
                <div className="p-4 m-2 w-full lg:w-64 text-center lg:text-left">
                  <img
                    src={product.imgSrc}
                    alt={product.name}
                    className="w-full h-56 lg:h-3/6 mb-4 mx-auto lg:mx-0"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <p className="my-2">
                      <span className="text-green-500 font-bold">
                        INR {product.price}
                      </span>
                      <span className="line-through ml-2 text-gray-500">
                        {product.originalPrice}
                      </span>
                      <span className="text-red-500 ml-2">
                        {product.discount}% off
                      </span>
                    </p>
                    <p>Sizes: {product.sizes.join(", ")}</p>
                    <p className="flex justify-center lg:justify-start items-center font-semibold">
                      <MdOutlineTimer className="text-xl lg:text-2xl" />
                      <CountdownTimer initialTime={600} />
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default DressesList;
