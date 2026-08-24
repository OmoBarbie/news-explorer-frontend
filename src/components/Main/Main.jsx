import Header from "../Header/Header";
import About from "../About/About";
import Footer from "../Footer/Footer";
import NewsCardList from "../NewsCardList/NewsCardList";
import "./Main.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import LoginModal from "../LoginModal/LoginModal";
import searchNews from "../../utils/newsApi";
import { useState } from "react";

const Main = ({
  handleLoginClick,
  isLoggedIn,
  onSignOut,
  handleCloseModal,
  setSavedArticles,
  setSearchQuery,
  searchQuery,
}) => {
  const [articles, setArticles] = useState([]);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  async function handleSearch(query) {
    setStatus("loading");
    setSearchQuery(query);
    setError(null);

    try {
      const articles = await searchNews(query);
      setArticles(articles);
      setStatus("success");
    } catch (err) {
      setError(err.message);
      setStatus("error");
    }
  }

  return (
    <>
      <Header
        handleLoginClick={handleLoginClick}
        handleCloseModal={handleCloseModal}
        onSearch={handleSearch}
        isLoggedIn={isLoggedIn}
      />
      <section className="main">
        <div className="main__list">
          <NewsCardList
            articles={articles}
            status={status}
            error={error}
            setSavedArticles={setSavedArticles}
            searchQuery={searchQuery}
          />
        </div>
      </section>
      <About></About>
      <Footer></Footer>
    </>
  );
};

export default Main;
