import React, { useState } from "react";
import { FiUser, FiSearch, FiHeart, FiShoppingBag } from "react-icons/fi";
import { RiMenu4Fill } from "react-icons/ri";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="w-full flex items-center bg-transparent justify-between px-4 py-2 lg:py-4 absolute top-0 left-0 z-50">
      <div className="flex lg:hidden">
        <div
          className="text-2xl cursor-pointer text-black"
          onClick={toggleMenu}
        >
          <RiMenu4Fill />
        </div>
      </div>

      <ul
        className={`${
          isMenuOpen ? "block" : "hidden"
        } lg:flex flex-1 list-none text-left lg:text-start justify-start lg:justify-start lg:flex-row flex-col lg:shadow-none shadow-md lg:mt-0 mt-10 absolute lg:static w-full lg:w-auto top-0 left-0 lg:p-0 p-4`}
      >
        <li className="inline-block mx-5 text-xl cursor-pointer text-black lg:my-0 my-4">
          <FiUser />
        </li>
        <li className="inline-block mx-5 text-xl cursor-pointer text-black lg:my-0 my-4">
          <FiSearch />
        </li>
        <li className="inline-block mx-5 text-xl cursor-pointer text-black lg:my-0 my-4">
          <FiHeart />
        </li>
        <li className="inline-block mx-5 text-xl cursor-pointer text-black lg:my-0 my-4">
          <FiShoppingBag />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
