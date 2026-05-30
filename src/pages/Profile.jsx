import { useState, useEffect } from "react";
import "./Profile.css";

function Profile({ handleLogout }) {
  const [userEmail, setUserEmail] = useState("Guest User");
  const [bookingCount, setBookingCount] = useState(0);

  useEffect(() => {
    const email = localStorage.getItem("loggedInUser") || "Guest User";
    setUserEmail(email);

    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookingCount(bookings.length);
  }, []);

  return (
    <div className="profile-page-wrapper">
      <div className="glass profile-card">
        <div className="avatar-ring">
          <div className="avatar-content">👤</div>
        </div>
        <h2 className="profile-name">{userEmail}</h2>
        <p className="profile-membership">Premium VIP Member</p>

        <div className="profile-metrics">
          <div className="metric-card">
            <div className="metric-value">{bookingCount}</div>
            <div className="metric-label">Total Bookings</div>
          </div>
          <div className="metric-card">
            <div className="metric-value">₹200</div>
            <div className="metric-label">Standard Price</div>
          </div>
        </div>

        <button className="btn btn-secondary" style={{ width: "100%" }} onClick={handleLogout}>
          Sign Out 👤
        </button>
      </div>
    </div>
  );
}

export default Profile;
