import "./SavedNews.css";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import SavedNewsCardsList from "../SavedNewsCardsList/SavedNewsCardsList";

const SavedNews = ({}) => {
  return (
    <div className="saved-news">
      <SavedNewsHeader />
      <SavedNewsCardsList />
    </div>
  );
};

export default SavedNews;
