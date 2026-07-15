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
    </>
  );
};

export default Main;
