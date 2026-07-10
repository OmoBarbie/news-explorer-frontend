import Header from "../Header/Header";
import About from "../About/About";
import Footer from "../Footer/Footer";
import NewsCardList from "../NewsCardList/NewsCardList";
import "./Main.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import LoginModal from "../LoginModal/LoginModal";

const Main = ({
  handleLoginClick,
  isLoggedIn,
  onSignOut,
  handleCloseModal,
}) => {
  return (
    <>
      <Header
        handleLoginClick={handleLoginClick}
        handleCloseModal={handleCloseModal}
      />
      <section className="main">
        <div className="main__list">
          <NewsCardList />
        </div>
      </section>
      <About></About>
      <Footer></Footer>
      <main className="main">
        <section className="hero">
          <h1 className="hero__title">Welcome to NewsExplorer</h1>
          <p className="hero__subtitle">
            Discover the latest news from around the world
          </p>
        </section>

        <section className="articles">
          <h2 className="articles__title">Latest Articles</h2>
          <div className="articles__list">
            {/* Article items would go here */}
          </div>
        </section>
      </main>
    </>
  );
};

export default Main;
