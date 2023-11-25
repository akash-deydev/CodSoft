import { Link } from "react-router-dom";
import { logout } from "../redux/slice/userSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

const Navbar = ({ isAuthenticated }) => {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
    toast.success("Logged Out");
  };

  return (
    <div className="navbar">
      <div id="app-logo">Quiz App</div>
      <div>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="quiz-creation">
            <li>Create Quiz</li>
          </Link>
          <Link to="take-quiz">
            <li>Take a Quiz</li>
          </Link>
          <Link>
            <li>Scoreboard</li>
          </Link>
          <Link>
            <li>Share a Quiz</li>
          </Link>
          <Link to="/dashboard">
            <li>Dashboard</li>
          </Link>
        </ul>
      </div>
      <div>
        {isAuthenticated ? (
          <button onClick={onLogout}>Logout</button>
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
