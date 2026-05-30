import { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Movies from "./pages/Movies";
import BookingHistory from "./pages/BookingHistory";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import MovieDetails from "./pages/MovieDetails";
import SeatBooking from "./pages/SeatBooking";
import Payment from "./pages/Payment";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [user, setUser] = useState(localStorage.getItem("loggedInUser") || null);

  const handleLoginSuccess = (email) => {
    setUser(email);
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("userEmail");
    setUser(null);
    alert("👋 Logged out successfully! Have a great day.");
  };

  return (
    <Router>
      <Navbar user={user} handleLogout={handleLogout} />

      <main style={{ maxWidth: "1300px", margin: "0 auto", padding: "24px 24px 80px" }}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/login" element={<Login handleLoginSuccess={handleLoginSuccess} />} />
          <Route path="/movie/:id" element={<MovieDetails />} />

          {/* Protected Routes */}
          <Route
            path="/profile"
            element={
              <ProtectedRoute isLoggedIn={!!user}>
                <Profile handleLogout={handleLogout} />
              </ProtectedRoute>
            }
          />

          <Route
            path="/seat-booking"
            element={
              <ProtectedRoute isLoggedIn={!!user}>
                <SeatBooking />
              </ProtectedRoute>
            }
          />

          <Route
            path="/booking-history"
            element={
              <ProtectedRoute isLoggedIn={!!user}>
                <BookingHistory />
              </ProtectedRoute>
            }
          />

          <Route
            path="/payment"
            element={
              <ProtectedRoute isLoggedIn={!!user}>
                <Payment />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
