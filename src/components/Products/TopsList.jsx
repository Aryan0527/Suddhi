import React from "react";
import { tops_products } from "../../utils/tops_product";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

const TopsList = () => {
  return (
    <div className="text-start py-8 relative bottom-10">
      <div className="flex items-center w-full">
        {tops_products
          .filter((ele, i) => i < 1)
          .map((product, index) => (
            <div key={index} className="w-1/4">
              <div className=" p-4 m-2 w-64 relative">
                <h2 className="text-xl font-semibold mt-[12px] ml-[18px] absolute top-0 left-0 z-10">
                  Tops
                </h2>
                <img
                  src={product.imgSrc}
                  alt={product.name}
                  className="w-full h-3/6 mb-4"
                />
                <div className="text-left">
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
                </div>
              </div>
            </div>
          ))}

        <div className="w-3/4">
          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            autoplay={{
              delay: 2200,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            // navigation={true}
            modules={[Autoplay]}
          >
            {tops_products.map((product, index) => (
              <SwiperSlide key={index}>
                <div className=" p-4 m-2 w-64">
                  <img
                    src={product.imgSrc}
                    alt={product.name}
                    className="w-full h-3/6 mb-4"
                  />
                  <div className="text-left">
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

export default TopsList;
