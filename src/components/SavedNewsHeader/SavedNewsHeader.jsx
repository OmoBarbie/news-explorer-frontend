import { Link } from "react-router-dom";
import "./SavedNewsHeader.css";
import whiteLogOutIcon from "../../images/logout-icon.svg";
import { useState } from "react";
import MobileMenu from "../MobileMenu/MobileMenu.jsx";

const SavedNewsHeader = ({
  handleLoginClick,
  isLoggedIn = true,
  onSignOut,
  handleCloseModal,
  keywordList,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <header className="header_location_saved-news">
        <div className="header__wrapper_location_saved-news">
          {/* LEFT SIDE */}
          <Link to="/" className="header__logo-link">
            <span className="header__title_location_saved-news">
              NewsExplorer
            </span>
          </Link>

          {/* RIGHT SIDE */}

          <nav className="navigation">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="navigation__menu-button_location_saved-news"
            />
            <ul className="navigation__list-savednews-header">
              <li>
                <Link to="/" className="navigation__link_location_saved-news">
                  Home
                </Link>
              </li>

              {isLoggedIn ? (
                <>
                  <li>
                    <Link
                      to="/saved-news_location_saved-news"
                      className="navigation__link_location_saved-news navigation__link_active_location_saved-news
                    "
                    >
                      Saved Articles
                    </Link>
                  </li>
                  <li>
                    {/* <button
                    onClick={onSignOut}
                    className="navigation__button_location_saved-news"
                  >
                    Sign Out
                  </button> */}
                    <button
                      onClick={onSignOut}
                      className="navigation__button navigation__button-saved-news "
                    >
                      <p className="navigation__button-text navigation__button-text_color-black">
                        User
                      </p>
                      <img
                        className="navigation__button-logout-icon"
                        src={whiteLogOutIcon}
                        alt="Log out"
                      />
                    </button>
                  </li>
                </>
              ) : (
                <li>
                  <button
                    onClick={handleLoginClick}
                    className="navigation__button_location_saved-news"
                  >
                    Sign In
                  </button>
                </li>
              )}
            </ul>
          </nav>
        </div>
        <div className="saved-news__subheader">
          <h2 className="saved-news__title">Saved Articles</h2>
          <h3 className="saved-news__subtitle">Manage your saved articles</h3>
          <p className="saved-news__keywords">
            {"By keywords: "}
            <span className="saved-news__keywords_bold">
              {Array.from(keywordList).join(", ")}
            </span>
          </p>
        </div>
      </header>
      {isMenuOpen && (
        <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      )}
    </>
  );
};

export default SavedNewsHeader;
