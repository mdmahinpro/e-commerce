import Products from "../components/home-page-UI/products/Products";
import ProductDetails from "../components/product-page-ui/ProductDetails";

export default function Home() {
  return (
    <div>
      <h1 className="text-center text-3xl">Welcome to Home</h1>
      <Products />
    </div>
  );
}
