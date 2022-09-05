import Image from "next/image";
import React from "react";
import {
  AiFillStar,
  AiOutlineLeftCircle,
  AiOutlineRightCircle,
  AiOutlineStar,
} from "react-icons/ai";
import headphone from "../../public/assets/headphones_a_1.webp";
import Button from "../general/Button";

function ProductDetails() {
  return (
    <div className="md:flex w-full  ">
      <div className="w-2/4">
        <Image
          className="px-4 py-2 bg-gray-200 rounded-lg my-2"
          src={headphone}
          alt="Picture of the author"
          width="350px"
          height="300px"
        />

        <p>Sub Image</p>
      </div>
      <div className="w-3/4 space-y-4 ">
        <h1 className="text-3xl font-semibold text-gray-600">
          boAt immortal 100D
        </h1>
        <p className="text-red-600 flex">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
        </p>
        <p className="text-lg font-semibold">Details:</p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
          harum cumque ipsa atque! Et, placeat laboriosam sit temporibus illo
          dicta ipsam, aliquam dolorem debitis iure, ut quis dignissimos aperiam
          quo tempora blanditiis amet quibusdam! Incidunt quaerat laborum ipsum
          explicabo iste, placeat itaque fuga obcaecati nam enim quas aperiam
          tenetur doloremque, dolore doloribus tempora veniam! Vero pariatur
          rerum repudiandae in eveniet sape, pariatur commodi voluptas labore
          rerum provident fuga.
        </p>
        <h1 className="text-2xl text-indigo-600 font-semibold">$50</h1>
        <span className="flex ">
          <p className="font-semibold ">Quantity:</p>
          <span className="flex text-blue-500 font-semibold items-center">
            <AiOutlineLeftCircle size={20} />
            01
            <AiOutlineRightCircle size={20} />
          </span>
        </span>
        <div className="flex space-x-6">
          <Button
            extraStyle="bg-white text-gray-700 focus:ring-indigo-500"
            text="Add to Cart"
          />
          <Button
            extraStyle="bg-blue-200 focus:ring-green-500"
            text="Buy Now"
          />
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
