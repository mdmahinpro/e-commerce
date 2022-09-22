/* eslint-disable @next/next/no-img-element */
import React from "react";

function FooterBanner() {
  return (
    <div>
      <section id="parent" className="flex justify-center">
        <div
          id="card"
          className="bg-[#F02D34] mt-16 px-10 text-white flex flex-wrap justify-center lg:justify-between rounded-lg py-10 lg:py-0"
        >
          <div className="w-[80%] lg:w-[30%] flex flex-col justify-center items-center lg:items-start">
            <p className="uppercase text-sm text-gray-200 font-light">
              20% off
            </p>
            <p className="uppercase font-extrabold text-6xl mt-2">Fine</p>
            <p className="uppercase font-extrabold text-6xl mb-2">smile</p>
            <p className="uppercase text-sm">15 Nov - 7 Dec</p>
          </div>
          <div className="w-[80%] lg:w-[40%] flex justify-center">
            <img
              src="/assets/headphones_c_1.webp"
              alt=""
              className="w-full h-[100%] lg:h-[120%] lg:mt-[-80px]"
            />
          </div>
          <div className="w-[80%] lg:w-[30%] flex flex-col justify-center items-center lg:items-start">
            <p className="capitalize">best solo Air</p>
            <p className="capitalize font-extrabold text-2xl lg:text-4xl mb-1 lg:mb-0">
              Summer Sale
            </p>
            <p className="text-xs">
              Company that is Grown from 270 t0 480 Employees From Last 12
              Months
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FooterBanner;
