import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import { Toaster } from "react-hot-toast";

import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import CreateQuiz from "./components/CreateQuiz";
import TakeQuiz from "./components/TakeQuiz";

function App() {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  return (
    <>
      <Toaster />
      <Navbar isAuthenticated={isAuthenticated} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/quiz-creation"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <CreateQuiz />
            </ProtectedRoute>
          }
        />
        <Route path="/take-quiz" element={<TakeQuiz />} />
      </Routes>
    </>
  );
}

export default App;
