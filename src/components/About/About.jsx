import "./About.css";
import authorImage from "../../images/TayoHeadshot.jpg";

const About = () => {
  return (
    <section className="about">
      <img className="about__image" alt="About the author" src={authorImage} />
      <div className="about__content">
        <h2 className="about__title">About the author</h2>
        <p className="about__description">
          I enjoy creating beautiful solutions that improve processes and help
          people achieve their goals. My background spans higher education,
          entrepreneurship, and software development, giving me a unique blend
          of business and technical expertise. I am currently expanding my
          skills in AI, web development, and cloud technologies while building
          projects that solve real-world problems.
          <span className="about__description">
            Beyond my professional career, I am the founder of a health-focused
            smoothie business My vision is to combine technology,
            entrepreneurship, and exceptional customer experiences to create
            meaningful impact in both the health and tech industries. Whether
            developing applications, mentoring others, or growing my business, I
            bring dedication, creativity, and a strong work ethic to everything
            I do. I believe success comes from consistency, innovation, and a
            genuine desire to make a positive difference.
          </span>
        </p>
      </div>
    </section>
  );
};

export default About;
