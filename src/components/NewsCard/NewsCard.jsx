import "./NewsCard.css";
import { mockArticles } from "../../utils/mockdata";
import { useState } from "react";

const NewsCard = ({ newsArticle, isSaved }) => {
  const article = newsArticle;
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

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
          {isSaved && (
            <button
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="card__remove-bookmark-button"
              onClick={toggleBookmark}
            ></button>
          )}
          {!isSaved && (
            <button
              className={`card__bookmark-button ${isBookmarked ? "card__bookmark-button_bookmarked_true" : ""}`}
              onClick={toggleBookmark}
            ></button>
          )}
        </div>
        {isHovered && (
          <div className="card__delete-message">Remove from Saved</div>
        )}
        {article.keyword && (
          <div className="card__keyword">{article.keyword}</div>
        )}
      </div>
    </>
  );
};

export default NewsCard;
