import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { useRef } from "react";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const {
    state: { cart },
  } = useCart();

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header className="navbar">
      <div className="brand-logo">Shoppers Stop</div>
      <Link href="#" className="toggle-button" onClick={showNavbar}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </Link>

      <nav className="nav-links" ref={navRef}>
        <Link to="/">Home</Link>

        <Link>Browse</Link>

        <Link>Contact</Link>

        <Link>About</Link>

        <Link href="#" className="nav-close-button" onClick={showNavbar}>
          <IoClose />
        </Link>
        <div className="nav-buttons">
          <Link to="/shopping-cart">
            <div className="badge-wrapper">
              <FaShoppingCart size="1.5rem" />
              <span>{cart.length}</span>
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
