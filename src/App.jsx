import React from "react";
import ProductList from "./components/ProductList.jsx";
import Navbar from "./components/Navbar/Navbar";
import Carousel from "./components/Carousel/Carousel";

const App = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <ProductList />
    </div>
  );
};

export default App;
