import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">Shoppers Stop</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link>Browse</Link>
          </li>
          <li>
            <Link>Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="nav-buttons">
        <Link to="/shopping-cart">
          <div>
            <FaShoppingCart size="1.5rem" />
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
