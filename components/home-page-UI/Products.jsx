import React from "react";
import ProductCard from "./ProductCard";
import productData from "./productData";

function Products() {
  return (
    <div className="my-10">
      <h2 className="text-center text-primary text-2xl font-bold capitalize">
        Best Seller products
      </h2>
      <p className="text-sm font-light text-center">
        speaker There are many variation passages
      </p>
      <div className="my-5 flex flex-wrap items-center gap-3">
        {productData.map((product) => (
          <ProductCard key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default Products;
