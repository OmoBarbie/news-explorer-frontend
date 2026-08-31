import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

import Preloader from "../Preloader/Preloader";
import { useState } from "react";

const NewsCardList = ({
  articles,
  status,
  error,
  setSavedArticles,
  searchQuery,
}) => {
  const [cardsVisible, setCardsVisible] = useState(3);
  // useEffect(() => {
  //   setCardsVisible(3);
  // }, [articles]);

  if (status === "loading") {
    return <Preloader />;
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  if (status === "idle") {
    return null;
  }
  if (articles.length === 0) {
    return (
      <div className="no-results">
        <div className="no-results__image"></div>
        <h2 className="no-results__title">Nothing found</h2>
        <p className="no-results__description">
          Sorry, but nothing matched your search terms.
        </p>
      </div>
    );
  }

  const visibleArticles = articles.slice(0, cardsVisible);
  const handleSaveArticles = (article) => {
    setSavedArticles((prev) => [...prev, { ...article, keyword: searchQuery }]);
  };

  return (
    <>
      <h2 className="card__list-title">Search results</h2>
      <ul className="cards__container">
        {visibleArticles.map((article, index) => (
          <li className="card__container" key={`${article.id}-${index}`}>
            <NewsCard newsArticle={article} onSave={handleSaveArticles} />
          </li>
        ))}
      </ul>
      <button
        className="show-more"
        onClick={() => setCardsVisible(cardsVisible + 3)}
      >
        Show More
      </button>
    </>
  );
};
export default NewsCardList;
