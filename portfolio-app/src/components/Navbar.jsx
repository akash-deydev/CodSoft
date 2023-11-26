import { Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { useRef } from "react";

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div className="navbar">
      <div className="author-name">Akash Dey</div>
      <Link to="#" className="show-nav-btn" onClick={showNavbar}>
        <CiMenuBurger />
      </Link>
      <div className="nav-links">
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link href="/experiences">Experience</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/contacts">Contacts</Link>
        </li>
        <Link to="#" className="hide-nav-btn">
          <IoClose onClick={showNavbar} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
