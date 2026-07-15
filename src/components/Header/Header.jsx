import { Link } from "react-router-dom";
import "./Header.css";
// import logoPath from "../../images/logo.svg";

const Header = ({
  handleLoginClick,
  isLoggedIn,
  onSignOut,
  handleCloseModal,
}) => {
  return (
    <header className="header">
      <div className="header__wrapper">
        {/* LEFT SIDE */}
        <Link to="/" className="header__logo-link">
          <span className="header__title">NewsExplorer</span>
        </Link>

        {/* RIGHT SIDE */}
        <nav className="navigation">
          <button className="navigation__menu-button" />
          <ul className="navigation__list">
            <li>
              <Link to="/" className="navigation__link navigation__link_active">
                Home
              </Link>
            </li>

            {isLoggedIn ? (
              <>
                <li>
                  <Link to="/saved-news" className="navigation__link">
                    Saved Articles
                  </Link>
                </li>
                <li>
                  <button onClick={onSignOut} className="navigation__button">
                    Sign Out
                  </button>
                </li>
              </>
            ) : (
              <li>
                <button
                  onClick={handleLoginClick}
                  className="navigation__button"
                >
                  Sign In
                </button>
              </li>
            )}
          </ul>
        </nav>
      </div>
      <div className="search">
        <div className="search__container">
          <h2 className="search__title">What's going on in the world?</h2>
          <p className="search__description">
            Find the latest news on any topic and save them in your personal
            account.
          </p>
        </div>
        <form className="search__form">
          <input type="text" placeholder="nature" className="search__input" />
          <button type="submit" className="search__button">
            Search
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;
