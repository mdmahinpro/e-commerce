import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Navbar() {
  return (
    <div className="mx-auto justify-between flex">
      <span>E-commerce</span>
      <span>
        <AiOutlineShoppingCart />
      </span>
    </div>
  );
}

export default Navbar;
