import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <div className="mx-24 my-5">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
