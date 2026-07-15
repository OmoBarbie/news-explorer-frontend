import "./SavedNews.css";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import SavedNewsCardsList from "../SavedNewsCardsList/SavedNewsCardsList";
import Footer from "../Footer/Footer";

const SavedNews = ({}) => {
  return (
    <div className="saved-news">
      <SavedNewsHeader />
      <SavedNewsCardsList />
      <Footer></Footer>
    </div>
  );
};

export default SavedNews;
