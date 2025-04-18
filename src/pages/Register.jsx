import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/Register.css";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    accountType: "SmartGen" // Default selection
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registration data:", formData); // Check console
    alert("Account created (demo)");
    navigate("/login");
  };

  return (
    <div className="register-container">
      <Navbar title="Register" />
      <h1>Create New Account</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={formData.firstName}
          onChange={(e) => setFormData({...formData, firstName: e.target.value})}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={(e) => setFormData({...formData, lastName: e.target.value})}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({...formData, password: e.target.value})}
          required
        />
        <select
          value={formData.accountType}
          onChange={(e) => setFormData({...formData, accountType: e.target.value})}
        >
          <option value="SmartGen">SmartGen</option>
          <option value="Youth">Youth</option>
          <option value="SmartWomen">SmartWomen</option>
        </select>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}