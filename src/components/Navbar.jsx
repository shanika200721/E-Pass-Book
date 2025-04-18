import { useNavigate } from "react-router-dom";

export default function Navbar({ title }) {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <button onClick={() => navigate(-1)}>← Back</button>
      <h2>{title}</h2>
    </nav>
  );
}