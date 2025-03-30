import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/ForgotPassword.css";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  console.log("ForgotPassword component rendered!"); // Debug log

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email entered:", email); // Debug log
    alert(`Password reset link sent to: ${email}`);
    navigate("/login");
  };

  return (
    <div className="forgot-password-container">
      <Navbar title="Forgot Password" />
      <h2>Reset Your Password</h2>
      <p>Enter your email to receive a reset link:</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Send Reset Link</button>
      </form>
    </div>
  );
}