import React from "react";
import link from "../../assets/Link.svg";
import link1 from "../../assets/Link1.svg";
import link2 from "../../assets/Link2.svg";
import link3 from "../../assets/Link3.svg";
import link4 from "../../assets/Link4.svg";
import link5 from "../../assets/Link5.svg";

const TrendingNow = () => {
  return (
    <div className="p-8 bg-green-100">
      <h2 className="text-2xl font-bold mb-4 text-center">
        TRENDING NOW{" "}
        <span role="img" aria-label="fire">
          🔥
        </span>
      </h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="border">
          <img src={link} alt="Breezy Linen" className="w-full" />
          <p className="text-center">BREEZY LINEN</p>
        </div>
        <div>
          <img src={link1} alt="Tops" className="w-full" />
          <p className="text-center">TOPS</p>
        </div>
        <div>
          <img src={link2} alt="Crochet Shirts" className="w-full" />
          <p className="text-center">CROCHET SHIRTS</p>
        </div>
        <div>
          <img src={link5} alt="All Black" className="w-full" />
          <p className="text-center">ALL BLACK</p>
        </div>
        <div>
          <img src={link4} alt="Cargos" className="w-full" />
          <p className="text-center">CARGOS</p>
        </div>
        <div>
          <img src={link3} alt="Full Sleeves" className="w-full" />
          <p className="text-center">FULL SLEEVES</p>
        </div>
      </div>
    </div>
  );
};

export default TrendingNow;
