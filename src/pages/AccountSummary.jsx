import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/AccountSummary.css";

// Simulated account data
const mockAccounts = [
  { id: 1, type: "SmartGen", number: "123456789", balance: 5000 },
  { id: 2, type: "Youth", number: "987654321", balance: 2500 },
];

export default function AccountSummary() {
  const navigate = useNavigate();
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    // Simulate API fetch
    setAccounts(mockAccounts);
  }, []);

  return (
    <div className="account-summary-container">
      <Navbar title="Account Summary" />
      <h2>Your Accounts</h2>
      <div className="accounts-grid">
        {accounts.map((account) => (
          <div key={account.id} className="account-card">
            <h3>{account.type}</h3>
            <p>Account: {account.number}</p>
            <p>Balance: ${account.balance.toFixed(2)}</p>
            <button 
              onClick={() => navigate(`/transactions/${account.number}`)}
              className="view-transactions-btn"
            >
              See Transactions
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}