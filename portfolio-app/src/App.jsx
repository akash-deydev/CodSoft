import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Navbar />
      <section className="hero">
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
        </div>
      </section>
      <section>
        <About />
      </section>
      <section>
        <Experience />
      </section>
      <Projects />
      <section>
        <Contact />
      </section>
    </>
  );
}

export default App;
