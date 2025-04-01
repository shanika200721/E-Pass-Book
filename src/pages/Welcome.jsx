import { useNavigate } from "react-router-dom";
import logo from "../assets/nlp-1.jpg";

export default function Welcome() {
    const navigate = useNavigate();

    return(
        <div className="welcome-cotainer">
            <img src="{logo}" alt="Bank Logo" className="logo" />
            
            <button
            onClick={() => navigate("/login")}
            className="get-started-btn" >
                Get Started
            </button>
        </div>
    )
}


