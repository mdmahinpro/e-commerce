import React from "react";
import { AiOutlineShopping } from "react-icons/ai";
import Button from "../general/Button";

function Success() {
  return (
    <div className=" bg-green-100 rounded-xl text-center ">
      <div className=" w-full flex justify-center items-center">
        <AiOutlineShopping size={94} className="text-green-500 " />
      </div>
      <div>
        <h1 className=" text-blue-900 text-2xl md:text-4xl leading-loose font-extrabold my-4">
          Thank You For Your Purchase
        </h1>
        <span className="font-bold space-y-4">
          <p>Check your email inbox for the receipt</p>
          <p>
            If you have any question, please email at{" "}
            <span className="text-red-500 font-bold">admin@ecommerce.com</span>{" "}
          </p>
        </span>
      </div>

      <Button
        extraStyle="bg-red-500 text-white my-6 hover:bg-blue-400 rounded-full focus:ring-green-500"
        text="Continue Shopping"
      />
    </div>
  );
}

export default Success;
