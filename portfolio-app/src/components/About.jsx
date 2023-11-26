import { SlBadge } from "react-icons/sl";
import { FaUniversity } from "react-icons/fa";

const About = () => {
  return (
    <div id="about">
      <div className="section-head">
        <h5>Get to know more</h5>
        <h3 className="animate">About Me</h3>
      </div>
      <section className="about-section">
        <div>
          <img src="/images/akash.jpg" alt="my-image-2" />
        </div>
        <div>
          <div className="exp-box">
            <div className="experience">
              <SlBadge size="1.5rem" />
              <h2>Experience</h2>
              <p style={{ textAlign: "center" }}>
                2+ years Frontend Development
              </p>
            </div>
            <div className="experience">
              <FaUniversity size="1.5rem" />
              <h2>Education</h2>
              <p style={{ textAlign: "center" }}>
                Bachelors Degree in Computer Application
              </p>
            </div>
          </div>
          <div className="about-me">
            Motivated IT graduate based out of Varanasi, Uttar Pradesh with
            strong analytical skills. Seeking Frontened Developer role with
            programming knowledge (Java,HTML, CSS, Javascript, ReactJs) and
            having knowledge of Backend Technologies like (NodeJs, Express,
            MongoDB). Eager to transition into the technology field.
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
