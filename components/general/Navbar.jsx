import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Navbar() {
  return (
    <div className="text-2xl flex justify-between my-5 mx-7">
      <span>E-commerce</span>
      <span className="text-3xl text-blue-400 relative">
        <span className="text-white font-extrabold text-xs absolute right-[-20px] px-2 py-1 bg-red-600 rounded-full top-[-10px]">
          0
        </span>
        <AiOutlineShoppingCart />
      </span>
    </div>
  );
}

export default Navbar;
