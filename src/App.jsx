import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Carousel from "./components/Carousel/Carousel";
import ProductList from "./components/Products/ProductList";
import TopsList from "./components/Products/TopsList";
import DressesList from "./components/Products/DressesList";

const App = () => {
  return (
    <div className="bg-[#d5dec9]">
      <Navbar />
      <Carousel />
      <ProductList />
      <TopsList />
      <DressesList />
    </div>
  );
};

export default App;
