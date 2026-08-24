import "./SavedNews.css";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import SavedNewsCardsList from "../SavedNewsCardsList/SavedNewsCardsList";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const SavedNews = ({ savedArticles }) => {
  return (
    <div className="saved-news">
      <SavedNewsHeader />
      <SavedNewsCardsList savedArticles={savedArticles} />
      <Footer></Footer>
    </div>
  );
};

export default SavedNews;
