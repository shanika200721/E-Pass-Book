import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/Transactions.css";

// Simulated transaction data
const mockTransactions = {
  "123456789": [
    { date: "2023-10-01", description: "Deposit", withdrawal: "", deposit: 1000, balance: 1000 },
    { date: "2023-10-05", description: "Grocery", withdrawal: 200, deposit: "", balance: 800 },
  ],
  "987654321": [
    { date: "2023-09-28", description: "Deposit", withdrawal: "", deposit: 500, balance: 500 },
  ],
};

export default function Transactions() {
  const { accountNumber } = useParams();
  const navigate = useNavigate();
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    setTransactions(mockTransactions[accountNumber] || []);
  }, [accountNumber]);

  return (
    <div className="transactions-container">
      <Navbar title={`Transactions - ${accountNumber}`} />
      <h2>Transaction History</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Withdrawal</th>
            <th>Deposit</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((txn, index) => (
            <tr key={index}>
              <td>{txn.date}</td>
              <td>{txn.description}</td>
              <td>{txn.withdrawal}</td>
              <td>{txn.deposit}</td>
              <td>${txn.balance.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}