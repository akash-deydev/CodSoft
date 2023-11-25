import { AiFillMail } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const Contact = () => {
  return (
    <div>
      <div className="section-head">
        <h5>Get in Touch</h5>
        <h3 className="animate">Contact Me</h3>
      </div>
      <div className="contact-links">
        <div>
          <AiFillMail />
          <span>akash.deydev@gmail.com</span>
        </div>
        <div>
          <AiFillLinkedin />
          <span>LinkedIn</span>
        </div>
      </div>
      <div className="footer-links">
        <ul>
          <li>About</li>
          <li>Experience</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="copyright-text">
        <p>Copyright © 2023 Akash Dey. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Contact;
