import "./SavedNewsCardsList.css";
import NewsCard from "../NewsCard/NewsCard";
import { mockArticles, savedMockArticles } from "../../utils/mockdata";

const SavedNewsCardsList = ({}) => {
  return (
    <section className="saved-news__container">
      <ul className="saved-news__list">
        {savedMockArticles.map((article) => (
          <li className="saved-news__item" key={article.id}>
            <NewsCard newsArticle={article} isSaved={true} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SavedNewsCardsList;
