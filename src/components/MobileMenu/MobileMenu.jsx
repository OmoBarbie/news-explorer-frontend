import { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./MobileMenu.css";
import CurrentUserContext from "../../context/CurrentUserContext";

const MobileMenu = ({
  isMenuOpen,
  setIsMenuOpen,
  handleLoginClick,
  handleLogoutClick,
}) => {
  const { isLoggedIn } = useContext(CurrentUserContext);
  const signOut = () => {
    handleLogoutClick();
  };

  return (
    <div className={`mobile-menu ${isMenuOpen ? "mobile-menu_open" : ""}`}>
      <button
        className="mobile-menu__close-button"
        onClick={() => setIsMenuOpen(false)}
      >
        Close
      </button>
      <div className="mobile-menu__backdrop"></div>
      <div className="mobile-menu__header">
        <h2 className="mobile-menu__title">NewsExplorer</h2>
      </div>

      <div className="mobile-menu__content">
        <nav className="mobile-menu__nav">
          <NavLink
            to="/"
            className="mobile-menu__link"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
          {isLoggedIn ? (
            <button
              className="mobile-menu__sign-in-button"
              onClick={() => {
                setIsMenuOpen(false);
                handleLogoutClick();
              }}
            >
              Log Out
            </button>
          ) : (
            <button
              className="mobile-menu__sign-in-button"
              onClick={() => {
                setIsMenuOpen(false);
                handleLoginClick();
              }}
            >
              Sign in
            </button>
          )}
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
