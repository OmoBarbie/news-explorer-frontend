import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__copyright">© 2026 Omotayo Oluwole</p>
      <ul className="footer__links">
        <li>
          <Link to="/home" className="footer__link">
            Home
          </Link>
        </li>
        <li>
          <a href="https://www.tripleten.com" className="footer__link">
            Tripleten
          </a>
        </li>
        <li>
          <a href="https://www.github.com" className="footer__link">
            GitHub
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com" className="footer__link">
            LinkedIn
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
