import "./Preloader.css";

function Preloader() {
  const isloading = true;
  return (
    <div>
      <div className="circle-preloader"></div>
      <p>Searching for news...</p>
    </div>
  );
}

export default Preloader;
