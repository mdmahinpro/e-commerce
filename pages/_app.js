import "../styles/globals.css";
import Navbar from "../components/general/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <div className="lg:mx-24 lg:my-5">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
