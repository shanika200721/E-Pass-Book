import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/Login.css";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempted with:", { username, password }); // Check console
    navigate("/home"); // Temporary redirect for testing
  };

  return (
    <div className="login-page">   
        {/* Navbar at the top */} 
      <Navbar title="Login" />  

      {/* Login form container */}   
     <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
        <p 
          className="forgot-password" 
          onClick={() => navigate("/forgot-password")}
        >
          Forgot Password?
        </p>
        <button 
          className="register-btn" 
          onClick={() => navigate("/register")}
        >
          Create New Account
        </button>
      </div>
    </div>
  );
}

