import "./NewsCard.css";
import { mockArticles } from "../../utils/mockdata";

const NewsCard = ({ newsArticle }) => {
  const article = newsArticle;
  return (
    <>
      <div className="card__item">
        <img
          src={article.urlToImage}
          alt={article.url}
          className="card__image"
        />
        <div className="card__details">
          <p className="card__date">{article.publishedAt}</p>
          <h3 className="card__title">{article.title}</h3>
          <p className="card__description">{article.description}</p>
          <p className="card__source">{article.source.name}</p>
        </div>
        <div className="card__bookmark-container">
          <button className="card__bookmark-button"></button>
        </div>
      </div>
    </>
  );
};

export default NewsCard;
