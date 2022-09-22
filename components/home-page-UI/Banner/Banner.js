import React from "react";
import Button from "../../general/Button";

function Banner() {
  return (
    <div className="md:flex justify-between  bg-slate-300 md:h-64 h-1/4 rounded-lg py-8 px-8">
      <div className="relative">
        <h4 className=" font-serif text-lg">Beats Solo</h4>
        <h3 className="text-3xl font-bold  text-black">Wireless</h3>
        <h1 className="text-4xl md:text-7xl font-extrabold uppercase text-white">
          Headphone
        </h1>
        <div>
          <Button
            extraStyle="bg-red-500 text-white my-6 hover:bg-blue-400 focus:ring-green-500"
            text="Shop Wireless Headphone"
          />
        </div>
        <span className="absolute left-0 top-0">
          <img
            src="/assets/headphones_a_4.webp"
            alt="Headphone IMG"
            className=" absolute "
          />
        </span>
      </div>
      <div className=" w-full  md:text-right my-4 md:my-8 overflow-hidden">
        <p className=" font-sans">Description:</p>
        <p className=" font-thin  ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
          quibusdam debitis corrupti, asperiores dolorum optio
        </p>
      </div>
    </div>
  );
}

export default Banner;
