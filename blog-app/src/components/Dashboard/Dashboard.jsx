import { useSelector } from "react-redux";
import "./Dashboard.css";

const Dashboard = () => {
  const displayName = useSelector((state) => state.user.user.displayName);

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <h2>Hello, {displayName}</h2>
      <div className="user-options">
        <div className="user-blogs"></div>
        <div className="user-btns"></div>
      </div>
    </div>
  );
};

export default Dashboard;
