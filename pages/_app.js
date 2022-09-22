import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <div className="lg:mx-24 lg:my-5">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
