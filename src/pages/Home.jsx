import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/Home.css";

export default function Home() {
  const navigate = useNavigate();
  const tabs = [
    "Account Summary", "Transfer Service", "Payment Service",
    "Pension Calculator", "Our Services", "Products",
    "Create New Account", "New Updates"
  ];

  return (
    <div className="home-container">
      <Navbar title="Dashboard" />
      <div className="sidebar">
        <div className="user-profile">
          <h3>John Doe</h3>
          <p>john@example.com</p>
        </div>
      </div>
      <div className="main-content">
        {tabs.map((tab) => (
          <button 
            key={tab} 
            className="tab-button"
            onClick={() => {
              if (tab === "Account Summary") navigate("/account-summary");
              // Add other tab navigations later
            }}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}