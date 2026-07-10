import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";
import { mockArticles } from "../../utils/mockdata";

const NewsCardList = () => {
  return (
    <>
      <h2 className="card__list-title">Search results</h2>
      <ul className="cards__container">
        {mockArticles.slice(3, 6).map((article) => (
          <li className="card__container" key={article.id}>
            <NewsCard newsArticle={article} />
          </li>
        ))}
      </ul>
      <button className="show-more">Show More</button>
    </>
  );
};
export default NewsCardList;
