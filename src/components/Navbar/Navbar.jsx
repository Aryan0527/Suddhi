import React from "react";
import { FiUser } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-between fixed top-0 left-0 z-50 bg-black/15">
      <ul className="flex-1 list-none text-start">
        <li className="inline-block my-2.5 mx-5 text-xl cursor-pointer text-white">
          <FiUser />
        </li>
        <li className="inline-block my-2.5 mx-5 text-xl cursor-pointer text-white">
          <CiSearch />
        </li>
        <li className="inline-block my-2.5 mx-5 text-xl cursor-pointer text-white">
          <CiHeart />
        </li>
        <li className="inline-block my-2.5 mx-5 text-xl cursor-pointer text-white">
          <FiShoppingBag />
        </li>
      </ul>
      <div className="mx-5 my-2.5 text-xl text-white">
        <RxHamburgerMenu />
      </div>
    </div>
  );
};

export default Navbar;
