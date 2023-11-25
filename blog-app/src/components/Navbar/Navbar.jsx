import { Link } from "react-router-dom";
import "./Navbar.css";
import { logout } from "../../slice/userSlice";
import { useDispatch } from "react-redux";

const Navbar = ({ isAuthenticated }) => {
  const dispatch = useDispatch();

  return (
    <nav>
      <div id="app-logo">Blog App</div>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link>About Us</Link>
          </li>
          <li>
            <Link>Contact</Link>
          </li>

          {isAuthenticated ? (
            <>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/create-blog">Create A Blog</Link>
              </li>
            </>
          ) : null}
        </ul>
      </div>
      <div>
        {isAuthenticated ? (
          <button onClick={() => dispatch(logout())}>Logout</button>
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
