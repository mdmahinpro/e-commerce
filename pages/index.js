
import Navbar from "../components/general/Navbar";
import HomePage from "../components/home-page-UI";


export default function Home() {
  return (
    <div>
      <Navbar />
      <h1 className="text-center text-3xl">Welcome to Home</h1>
      <HomePage />
    </div>
  );
}
