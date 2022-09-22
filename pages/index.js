import Navbar from "../components/general/Navbar";
import HomePage from "../components/home-page-UI";
import Banner from "../components/home-page-UI/Banner/Banner";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <h1 className="text-center text-3xl">Welcome to Home</h1>
      <HomePage />
    </div>
  );
}
