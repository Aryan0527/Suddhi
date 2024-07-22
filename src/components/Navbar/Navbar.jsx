import React from "react";
import { FiUser } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";
import { RiMenu4Fill } from "react-icons/ri";
const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-between absolute top-0 left-0 z-50">
      <ul className="flex-1 list-none text-start">
        <li className="inline-block my-2.5 mx-5 text-xl cursor-pointer text-black">
          <FiUser />
        </li>
        <li className="inline-block my-2.5 mx-5 text-xl cursor-pointer text-black">
          <FiSearch />
        </li>
        <li className="inline-block my-2.5 mx-5 text-xl cursor-pointer text-black">
          <FiHeart />
        </li>
        <li className="inline-block my-2.5 mx-5 text-xl cursor-pointer text-black">
          <FiShoppingBag />
        </li>
      </ul>
      <div className="mx-5 my-2.5 text-2xl cursor-pointer text-black">
        <RiMenu4Fill />
      </div>
    </div>
  );
};

export default Navbar;
