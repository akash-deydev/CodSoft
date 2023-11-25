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
        <p>Just the Match</p>
        <p>The Trail Kit</p>
        <p>Wholesale & Bulk</p>
        <p>Teaware</p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div style={{ borderBottom: "1px solid red", paddingBottom: "5px" }}>
          More From Shoppers Stop
        </div>
        <p>Our Story</p>
        <p>Blog</p>
        <p>Affiliate</p>
        <p>Contact Us</p>
        <p>FAQ's</p>
        <p>Sign In</p>
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
          <AiFillFacebook size="2rem" style={{ marginRight: "10px" }} />
          <AiFillInstagram size="2rem" style={{ marginRight: "10px" }} />
          <AiFillGithub size="2rem" style={{ marginRight: "10px" }} />
          <FaXTwitter size="2rem" style={{ marginRight: "10px" }} />
        </div>

        <div>
          <span>Terms of Service</span> | <span>Privacy Policy</span> |{" "}
          <span>Refund Policy</span> | <span>Accessibility Policy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
