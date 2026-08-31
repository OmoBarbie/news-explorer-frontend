import "./SavedNewsCardsList.css";
import NewsCard from "../NewsCard/NewsCard";

const SavedNewsCardsList = ({ savedArticles }) => {
  return (
    <section className="saved-news__container">
      <ul className="saved-news__list">
        {savedArticles.map((article) => (
          <li className="saved-news__item" key={article.url}>
            <NewsCard newsArticle={article} isSaved={true} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SavedNewsCardsList;
