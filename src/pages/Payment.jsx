import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Payment.css";

function Payment() {
  const navigate = useNavigate();

  const selectedMovie = localStorage.getItem("selectedMovie") || "No Movie Selected";
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats")) || [];

  const ticketPrice = 200;
  const totalAmount = selectedSeats.length * ticketPrice;

  // Credit Card Form Input States
  const [ccNum, setCcNum] = useState("");
  const [ccName, setCcName] = useState("");
  const [ccExpiry, setCcExpiry] = useState("");
  const [ccCvv, setCcCvv] = useState("");
  const [isFlipped, setIsFlipped] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleCardNumberChange = (val) => {
    // Strip spaces, format as 4-digit groups
    const stripped = val.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const formatted = [];
    for (let i = 0; i < stripped.length; i += 4) {
      formatted.push(stripped.substring(i, i + 4));
    }
    setCcNum(formatted.join(" "));
  };

  const handleExpiryChange = (val) => {
    const cleaned = val.replace(/[^0-9]/g, "");
    let formatted = cleaned;
    if (cleaned.length > 2) {
      formatted = cleaned.substring(0, 2) + "/" + cleaned.substring(2, 4);
    }
    setCcExpiry(formatted);
  };

  const handleCvvChange = (val) => {
    const cleaned = val.replace(/[^0-9]/g, "");
    setCcCvv(cleaned);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ccNum.length < 15 || ccName.length < 3 || ccExpiry.length < 5 || ccCvv.length < 3) {
      alert("⚠️ Please enter valid credit card details!");
      return;
    }

    setIsProcessing(true);

    setTimeout(() => {
      // Create new booking record
      const booking = {
        id: "TXN-" + Math.floor(Math.random() * 900000 + 100000),
        movie: selectedMovie,
        seats: selectedSeats,
        amount: totalAmount,
        date: new Date().toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }),
        time: "7:30 PM",
        screen: "SCREEN 02 (VIP Premium)"
      };

      const oldBookings = JSON.parse(localStorage.getItem("bookings")) || [];
      oldBookings.push(booking);
      localStorage.setItem("bookings", JSON.stringify(oldBookings));

      // Lock these seats persistently in localStorage database
      const selectedMovieId = localStorage.getItem("selectedMovieId") || "1";
      const occupiedKey = `occupied_${selectedMovieId}`;
      const currentOccupied = JSON.parse(localStorage.getItem(occupiedKey)) || [];
      currentOccupied.push(...selectedSeats);
      localStorage.setItem(occupiedKey, JSON.stringify(currentOccupied));

      setIsProcessing(false);
      setShowSuccess(true);
    }, 2000);
  };

  const handleCloseModal = () => {
    setShowSuccess(false);
    navigate("/booking-history");
  };

  // Helper to determine card brand
  const getCardBrand = () => {
    const raw = ccNum.replace(/\s+/g, "");
    if (raw.startsWith("4")) return "VISA";
    if (raw.startsWith("5")) return "MASTERCARD";
    return "CREDIT CARD";
  };

  return (
    <div className="payment-page-wrapper">
      <div className="section-header">
        <h2 className="section-title">Complete Your Payment</h2>
      </div>

      <div className="payment-container">
        {/* Virtual Card Frame */}
        <div className="card-space">
          <div className={`credit-card ${isFlipped ? "flipped" : ""}`}>
            
            {/* Front Card Panel */}
            <div className="credit-card-face credit-card-front">
              <div className="card-top">
                <div className="chip"></div>
                <div className="card-brand">{getCardBrand()}</div>
              </div>
              <div className="card-number-display">{ccNum || "•••• •••• •••• ••••"}</div>
              <div className="card-bottom">
                <div className="card-holder">
                  <span>Card Holder</span>
                  <div>{ccName.toUpperCase() || "JOHN DOE"}</div>
                </div>
                <div className="card-expiry">
                  <span>Expires</span>
                  <div>{ccExpiry || "MM/YY"}</div>
                </div>
              </div>
            </div>

            {/* Back Card Panel */}
            <div className="credit-card-face credit-card-back">
              <div className="magnetic-stripe"></div>
              <div style={{ width: "100%" }}>
                <div className="signature-strip">{ccCvv || "000"}</div>
              </div>
            </div>

          </div>
        </div>

        {/* Input Form Panel */}
        <form className="glass billing-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="cc-number">Card Number</label>
            <input
              type="text"
              id="cc-number"
              placeholder="4111 2222 3333 4444"
              maxLength="19"
              value={ccNum}
              onChange={(e) => handleCardNumberChange(e.target.value)}
              onFocus={() => setIsFlipped(false)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="cc-name">Cardholder Name</label>
            <input
              type="text"
              id="cc-name"
              placeholder="John Doe"
              value={ccName}
              onChange={(e) => setCcName(e.target.value)}
              onFocus={() => setIsFlipped(false)}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="cc-expiry">Expiry Date</label>
              <input
                type="text"
                id="cc-expiry"
                placeholder="MM/YY"
                maxLength="5"
                value={ccExpiry}
                onChange={(e) => handleExpiryChange(e.target.value)}
                onFocus={() => setIsFlipped(false)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="cc-cvv">CVV</label>
              <input
                type="text"
                id="cc-cvv"
                placeholder="123"
                maxLength="3"
                value={ccCvv}
                onChange={(e) => handleCvvChange(e.target.value)}
                onFocus={() => setIsFlipped(true)}
                onBlur={() => setIsFlipped(false)}
                required
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: "100%", marginTop: "15px" }} disabled={isProcessing}>
            {isProcessing ? "Processing Secure Connection... 🔒" : `Confirm & Pay ₹${totalAmount}`}
          </button>
        </form>
      </div>

      {/* Success Modal Overlay */}
      <div className={`success-overlay ${showSuccess ? "active" : ""}`}>
        <div className="glass success-modal">
          <div className="success-icon">🎉</div>
          <h2 className="success-title">Payment Successful!</h2>
          <p className="success-message">
            Your seats are reserved! Your digital tickets have been generated in your account history.
          </p>
          <button className="btn btn-primary" onClick={handleCloseModal}>
            View Tickets 🎫
          </button>
        </div>
      </div>
    </div>
  );
}

export default Payment;
