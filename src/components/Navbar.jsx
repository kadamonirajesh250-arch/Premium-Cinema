import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ user, handleLogout }) {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">🎬 Premium Cinema</Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/booking-history">Bookings</Link>
        <Link to="/profile">Profile</Link>
        {user ? (
          <button onClick={handleLogout} className="nav-auth-btn">Sign Out</button>
        ) : (
          <Link to="/login" className="nav-auth-btn-link">Sign In</Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
