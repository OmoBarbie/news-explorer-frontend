import "./Preloader.css";

function Preloader() {
  const isloading = true;
  return (
    <div className="preloader">
      <div className="preloader__circle"></div>
      <p>Searching for news...</p>
    </div>
  );
}

export default Preloader;
