import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login({ handleLoginSuccess }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginTab, setIsLoginTab] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("⚠️ Please fill in all required fields!");
      return;
    }

    if (isLoginTab) {
      // Login Flow
      const savedEmail = localStorage.getItem("savedEmail");
      const savedPass = localStorage.getItem("savedPassword");

      if (!savedEmail) {
        alert("❌ No accounts registered under this browser. Switch to 'Sign Up' tab first!");
        return;
      }

      if (email === savedEmail && password === savedPass) {
        localStorage.setItem("loggedInUser", email);
        localStorage.setItem("userEmail", email);
        handleLoginSuccess(email);
        alert("🎉 Login successful! Welcome back!");
        
        // Redirect back to seat selection if they were mid-booking
        if (localStorage.getItem("selectedMovie")) {
          navigate("/seat-booking");
        } else {
          navigate("/");
        }
      } else {
        alert("❌ Invalid credentials! Try again.");
      }
    } else {
      // Signup Flow
      const savedEmail = localStorage.getItem("savedEmail");
      if (savedEmail === email) {
        alert("✅ You already have an account! Switching to login...");
        setIsLoginTab(true);
        return;
      }

      localStorage.setItem("savedEmail", email);
      localStorage.setItem("savedPassword", password);
      alert("🎉 Signup completed! Log in with your new account credentials.");
      setIsLoginTab(true);
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="auth-page-wrapper">
      <form className="glass auth-wrapper" onSubmit={handleSubmit}>
        <div className="auth-header">
          <h2 className="auth-title">
            {isLoginTab ? "Member Login" : "Create Free Account"}
          </h2>
          <p className="auth-subtitle">
            {isLoginTab
              ? "Access your movie bookings anywhere."
              : "Join now to start booking premium tickets."}
          </p>
        </div>

        <div className="auth-tabs">
          <div
            className={`auth-tab ${isLoginTab ? "active" : ""}`}
            onClick={() => setIsLoginTab(true)}
          >
            Login
          </div>
          <div
            className={`auth-tab ${!isLoginTab ? "active" : ""}`}
            onClick={() => setIsLoginTab(false)}
          >
            Sign Up
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="auth-email">Email Address</label>
          <input
            type="email"
            id="auth-email"
            placeholder="example@cinema.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="auth-password">Password</label>
          <input
            type="password"
            id="auth-password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary auth-btn">
          {isLoginTab ? "Sign In ✅" : "Sign Up 🎉"}
        </button>
      </form>
    </div>
  );
}

export default Login;
