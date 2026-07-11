import "./SavedNewsCardsList.css";
import NewsCard from "../NewsCard/NewsCard";
import { mockArticles } from "../../utils/mockdata";

const SavedNewsCardsList = ({}) => {
  return (
    <section className="saved-news__container">
      <ul className="saved-news__list">
        {mockArticles.map((article) => (
          <li className="saved-news__item" key={article.id}>
            <NewsCard newsArticle={article} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SavedNewsCardsList;
