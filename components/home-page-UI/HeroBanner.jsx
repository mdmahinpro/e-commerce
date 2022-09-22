import Image from "next/image";
import React from "react";
import HeadphoneBan from "../../public/assets/headphones_a_1.webp";
import Button from "../general/Button";

function HeroBanner() {
  return (
    <div className="flex justify-between bg-slate-300 h-64 rounded-lg py-8 px-8">
      <div>
        <h4 className=" font-serif text-lg">Beats Solo</h4>
        <h3 className="text-3xl font-bold  text-black">Wireless</h3>
        <h1 className="text-7xl font-extrabold uppercase text-white">
          Headphone
        </h1>
        <div>
          <Button
            extraStyle="bg-red-500 text-white my-6 hover:bg-blue-400 focus:ring-green-500"
            text="Shop Wireless Headphone"
          />
        </div>
      </div>
      <Image alt="Headphone IMG" src={HeadphoneBan} width={280} />
      <span className=" w-48">
        <p className=" font-mono">Description:</p>
        <p className=" font-thin">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
          quibusdam debitis corrupti, asperiores dolorum optio
        </p>
      </span>
    </div>
  );
}

export default HeroBanner;
