import React from 'react'
import Navbar from "../Navbar/Navbar";
import Carousel from "../Carousel/Carousel";
import ProductList from "../Products/ProductList";
import TopsList from "../Products/TopsList";
import DressesList from "../Products/DressesList";
import Trending from "../Trending/Trending";

const MainPage = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <ProductList />
      <TopsList />
      <DressesList />
      <Trending />
    </>
  );
};
export default MainPage