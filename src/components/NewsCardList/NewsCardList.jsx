import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

const NewsCardList = () => {
  return (
    <>
      <h2 className="card__list-title">Search results</h2>
      <ul className="cards__container">
        <li className="card__container">
          <NewsCard />
        </li>
        <li className="card__container">
          <NewsCard />
        </li>
        <li className="card__container">
          <NewsCard />
        </li>
      </ul>
      <button className="show-more">Show More</button>
    </>
  );
};
export default NewsCardList;
