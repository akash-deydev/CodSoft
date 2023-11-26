import React from "react";
import Intro from "../components/Intro";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Homepage = () => {
  return (
    <div>
      <Intro />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
};

export default Homepage;
