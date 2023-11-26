import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div style={{ borderBottom: "1px solid red", paddingBottom: "5px" }}>
          Shop Matcha
        </div>
        <p className="footer-links">Just the Match</p>
        <p className="footer-links">The Trail Kit</p>
        <p className="footer-links">Wholesale & Bulk</p>
        <p className="footer-links">Teaware</p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div style={{ borderBottom: "1px solid red", paddingBottom: "5px" }}>
          More From Shoppers Stop
        </div>
        <p className="footer-links">Our Story</p>
        <p className="footer-links">Blog</p>
        <p className="footer-links">Affiliate</p>
        <p className="footer-links">Contact Us</p>
        <p className="footer-links">FAQ's</p>
        <p className="footer-links">Sign In</p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div
          style={{
            borderBottom: "1px solid red",
            paddingBottom: "5px",
          }}
        >
          Let's Stay Connected
        </div>
        <p>Enter your email to unlock 10% OFF.</p>
        <div className="footer-form">
          <input type="text" name="email" id="email" placeholder="Your Email" />
          <button>Submit</button>
        </div>
        <h4>Follow Us</h4>
        <div>
          <AiFillFacebook
            size="2rem"
            style={{ marginRight: "10px" }}
            className="footer-links"
          />
          <AiFillInstagram
            size="2rem"
            style={{ marginRight: "10px" }}
            className="footer-links"
          />
          <AiFillGithub
            size="2rem"
            style={{ marginRight: "10px" }}
            className="footer-links"
          />
          <FaXTwitter
            size="2rem"
            style={{ marginRight: "10px" }}
            className="footer-links"
          />
        </div>

        <div>
          <span className="footer-links">Terms of Service</span> |{" "}
          <span className="footer-links">Privacy Policy</span> |{" "}
          <span className="footer-links">Refund Policy</span> |{" "}
          <span className="footer-links">Accessibility Policy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
