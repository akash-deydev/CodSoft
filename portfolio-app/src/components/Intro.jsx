import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const Intro = () => {
  return (
    <div className="intro" id="intro">
      <div>
        <img src="/images/akki.jpg" alt="myimage" className="myimage" />
      </div>
      <div>
        <div id="firstLine">Hello, I'm</div>
        <div id="my-name" className="animate">
          Akash Dey
        </div>
        <div id="role" className="waviy">
          {[..."Frontend Developer"].map((letter, index) => {
            return (
              <span key={index} style={{ "--i": index + 1 }}>
                {letter}
              </span>
            );
          })}
        </div>
        <div className="contact-btns">
          <button id="primary-btn">Download CV</button>
          <button id="secondary-btn">Contact Info</button>
        </div>
        <div className="social-links">
          <BsLinkedin />
          <BsGithub />
        </div>
      </div>{" "}
    </div>
  );
};

export default Intro;
