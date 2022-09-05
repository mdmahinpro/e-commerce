/* eslint-disable @next/next/no-img-element */
import React from "react";

function ProductCard({ product }) {
  console.log("product", product);
  return (
    <div>
      <div className="h-[200px] w-[200px]  rounded-lg bg-[#EBEBEB]">
        <img src={product.imgSrc} alt="" />
      </div>
      <div className="mt-2 text-sm font-bold">
        <p className="text-gray-500">{product.name}</p>
        <p>${product.price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
