/* eslint-disable @next/next/no-img-element */
import React from "react";
import Button from "../general/Button";
import { client } from "../../lib/client";

function HeroBanner({ bannerData }) {
  console.log("bannerData", bannerData);
  return (
    <div className="mt-16 md:flex justify-center md:justify-between bg-slate-300 rounded-lg p-8">
      <div className="flex flex-col items-center md:items-start">
        <h4 className="text-sm font-serif">Beats Solo</h4>
        <h3 className="text-3xl font-bold  text-black">Wireless</h3>
        <h1 className="text-4xl md:text-7xl font-extrabold uppercase text-white tracking-[3px] leading-10">
          Headphone
        </h1>
        <div>
          <Button
            extraStyle="bg-red-500 text-white my-6 hover:bg-blue-400 focus:ring-green-500"
            text="Shop Wireless Headphone"
          />
        </div>
      </div>
      <div className="">
        <img
          src="/assets/headphones_a_1.webp"
          alt="Headphone IMG"
          className="w-72 h-64 md:mt-[-65px]"
        />
      </div>
      <div className="md:w-[30%] md:text-right my-4 md:my-8 overflow-hidden flex flex-col items-center md:items-start">
        <p className="font-sans text-md">Description:</p>
        <p className="font-thin  text-center md:text-start text-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
          quibusdam debitis corrupti, asperiores dolorum optio
        </p>
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const query = '*[_type === "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type === "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default HeroBanner;
