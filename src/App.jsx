import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import bg from "./assets/bg.png";

const App = () => {
  return (
    <div>
      <img className="w-full absolute h-screen " src={bg} alt="" srcset="" />
      <Navbar />
      <Main />
    </div>
  );
};

export default App;
