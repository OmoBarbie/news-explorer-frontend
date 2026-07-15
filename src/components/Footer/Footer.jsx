import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__copyright">© 2026 Omotayo Oluwole</p>
      <div className="footer__links-wrapper">
        <ul className="footer__links">
          <li>
            <Link to="/" className="footer__link">
              Home
            </Link>
          </li>
          <li>
            <a href="https://www.tripleten.com" className="footer__link">
              Tripleten
            </a>
          </li>
        </ul>
        <ul className="footer__social-links">
          <li>
            <a href="https://www.github.com/OmoBarbie" className="footer__link">
              <div className="footer__github"></div>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/omotayodaniel/"
              className="footer__link"
            >
              <div className="footer__linkedin"></div>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
