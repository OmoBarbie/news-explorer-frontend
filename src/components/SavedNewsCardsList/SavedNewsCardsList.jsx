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

/* 
TODO:
1 - The save button should not be accessible when logged out (*)
2 - The signup modal is missing a username field *
3 - There seems to be duplication happening when I save an item, also items don't actually save when logged in *
*/
