import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./BookingHistory.css";

function BookingHistory() {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(list);
  }, []);

  const handleClearHistory = () => {
    if (!window.confirm("🚨 WARNING: This will permanently delete your booking history! Do you wish to proceed?")) return;
    localStorage.removeItem("bookings");
    setBookings([]);
  };

  const handleCancelBooking = (index) => {
    if (!window.confirm("⚠️ Are you sure you want to cancel this booking reservation? Refund will be credited automatically.")) return;
    const updated = [...bookings];
    updated.splice(index, 1);
    localStorage.setItem("bookings", JSON.stringify(updated));
    setBookings(updated);
  };

  return (
    <div className="history-page-wrapper">
      <div className="section-header">
        <h2 className="section-title">My Bookings History</h2>
        {bookings.length > 0 && (
          <button className="btn btn-secondary btn-sm" onClick={handleClearHistory}>
            Clear All Bookings
          </button>
        )}
      </div>

      <div className="tickets-container">
        {bookings.length === 0 ? (
          <div className="empty-state glass" style={{ width: "100%" }}>
            <div className="empty-icon">🎟</div>
            <h3>No Bookings Found</h3>
            <p style={{ color: "var(--text-muted)", marginTop: "8px" }}>
              Explore movies and book some tickets to print your stubs.
            </p>
            <button className="btn btn-primary" style={{ marginTop: "24px" }} onClick={() => navigate("/movies")}>
              Browse Movies 🍿
            </button>
          </div>
        ) : (
          bookings.map((booking, index) => {
            // Generate standard numbers of random thickness barcode lines
            const barcodeElements = Array.from({ length: 24 }).map((_, i) => (
              <span key={i} style={{ width: `${Math.floor(Math.random() * 3 + 1)}px`, background: "#000", flexGrow: 1 }}></span>
            ));

            return (
              <div key={booking.id || index} className="retro-ticket glass">
                <div className="ticket-body">
                  <div>
                    <span className="ticket-status">Confirmed</span>
                    <h3 className="ticket-title" style={{ marginTop: "10px" }}>{booking.movie}</h3>

                    <div className="ticket-details">
                      <div className="ticket-info-item">
                        <span className="ticket-info-label">Date & Time</span>
                        <span className="ticket-info-value">{booking.date} • {booking.time || "7:30 PM"}</span>
                      </div>
                      <div className="ticket-info-item">
                        <span className="ticket-info-label">Screen Hall</span>
                        <span className="ticket-info-value">{booking.screen || "SCREEN 02"}</span>
                      </div>
                    </div>
                  </div>

                  <div className="ticket-details" style={{ alignItems: "flex-end", borderTop: "1px dashed rgba(255,255,255,0.08)", paddingTop: "15px" }}>
                    <div className="ticket-info-item">
                      <span className="ticket-info-label">Reserved Seats</span>
                      <span className="ticket-seats">{booking.seats.join(", ")}</span>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <button
                        className="btn btn-secondary cancel-stub-btn"
                        onClick={() => handleCancelBooking(index)}
                      >
                        Cancel Stub
                      </button>
                    </div>
                  </div>
                </div>

                <div className="ticket-divider"></div>

                <div className="ticket-stub">
                  <div>
                    <span className="ticket-info-label" style={{ display: "block", marginBottom: "4px" }}>Ticket Amount</span>
                    <span className="ticket-price">₹{booking.amount}</span>
                  </div>

                  <div className="barcode-area">
                    <div className="barcode-vector">{barcodeElements}</div>
                    <span className="ticket-info-label" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                      {booking.id || "TXN-901822"}
                    </span>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default BookingHistory;
