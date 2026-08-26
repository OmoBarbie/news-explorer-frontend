import { Link } from "react-router-dom";
import "./Header.css";
import MobileMenu from "../MobileMenu/MobileMenu.jsx";
import { useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import whiteLogOutIcon from "../../images/white-logout-icon.svg";

const Header = ({
  handleLoginClick,
  isLoggedIn,
  onSignOut,
  handleCloseModal,
  onSearch,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    onSearch(searchQuery);
  }
  return (
    <>
      <header className="header">
        <div className="header__wrapper">
          {/* LEFT SIDE */}
          <Link to="/" className="header__logo-link">
            <span className="header__title">NewsExplorer</span>
          </Link>

          {/* RIGHT SIDE */}
          <nav className="navigation">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="navigation__menu-button"
            />
            <ul className="navigation__list">
              <li>
                <Link
                  to="/"
                  className="navigation__link navigation__link_active"
                >
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
                      <p className="navigation__button-text">User</p>
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
                    className="navigation__button"
                  >
                    Sign In
                  </button>
                </li>
              )}
            </ul>
          </nav>
        </div>
        <SearchForm
          onSearch={onSearch}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onSearchSubmit={handleSubmit}
        />
      </header>
      {isMenuOpen && (
        <MobileMenu
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          handleLoginClick={handleLoginClick}
        />
      )}
    </>
  );
};

export default Header;
