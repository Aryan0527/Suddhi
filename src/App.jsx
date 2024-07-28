import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Carousel from "./components/Carousel/Carousel";
import ProductList from "./components/Products/ProductList";
import TopsList from "./components/Products/TopsList";
import DressesList from "./components/Products/DressesList";
import Trending from "./components/Trending/Trending";

const App = () => {
  return (
    <div className="bg-green-100">
      <Navbar />
      <Carousel />
      <ProductList />
      <TopsList />
      <DressesList />
      <Trending />
    </div>
  );
};

export default App;
