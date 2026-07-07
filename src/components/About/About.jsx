import "./About.css";
import Placeholderimage from "../../images/placeholderimage.png";

const About = () => {
  return (
    <section className="about">
      <img
        className="about__image"
        alt="About the author"
        src={Placeholderimage}
      />
      <div className="about__content">
        <h2 className="about__title">About the author</h2>
        <p className="about__description">
          Learn more about the author and their journey in journalism.
        </p>
        <p className="about__description">
          Learn more about the author and their journey in journalism.
        </p>
      </div>
    </section>
  );
};

export default About;
