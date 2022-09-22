import Navbar from "../components/general/Navbar";
import Banner from "../components/home-page-UI/Banner/Banner";
import Products from "../components/home-page-UI/products/Products";

export default function Home() {
  return (
    <div>
      <Navbar />

      <h1 className="text-center text-3xl">Welcome to The Home</h1>
      <Banner />
      <Products />
    </div>
  );
}
