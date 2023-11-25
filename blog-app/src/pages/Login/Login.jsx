import "./Login.css";
import { Link } from "react-router-dom";
import { auth, provider } from "../../Firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../slice/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSignIn = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(user);
      dispatch(login({ displayName: user.displayName, uid: user.uid }));
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const onGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithPopup(auth, provider);
      const user = userCredential.user;
      dispatch(login({ displayName: user.displayName, uid: user.uid }));
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="user-form">
      <form>
        <div className="form-heading">Sign In</div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div style={{ textAlign: "center" }}>
          <button onClick={onSignIn}>Sign In</button>
        </div>
      </form>
      <div>OR</div>
      <button className="google-signin" onClick={onGoogleSignIn}>
        Signin with Google
      </button>
      <div>
        <span>New Customer? </span>
        <Link to="/register">Create an account</Link>
        <div style={{ textAlign: "center" }}>
          <Link>Forget Password?</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
