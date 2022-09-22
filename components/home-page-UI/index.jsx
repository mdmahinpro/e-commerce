import React from "react";
import HeroBanner from "./HeroBanner";
import FooterBanner from "./FooterBanner";
import Products from "./products/Products";

function HomePage() {
  return (
    <div>
      <HeroBanner />
      <Products />
      <FooterBanner />
    </div>
  );
}

export default HomePage;
