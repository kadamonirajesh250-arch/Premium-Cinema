import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SeatBooking.css";

function SeatBooking() {
  const navigate = useNavigate();

  const selectedMovie = localStorage.getItem("selectedMovie") || "No Movie Selected";
  const selectedMovieId = localStorage.getItem("selectedMovieId") || "1";

  // Stadium Seats Array (10 seats per row, 5 rows = 50 seats total)
  const seats = [
    "A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9", "A10",
    "B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9", "B10",
    "C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9", "C10",
    "D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "D10",
    "E1", "E2", "E3", "E4", "E5", "E6", "E7", "E8", "E9", "E10"
  ];

  // Mock occupied seats database by movie id to simulate standard cinema occupancy
  const mockOccupied = {
    "1": ["A3", "A4", "C5", "D1", "E9", "E10"],
    "2": ["B2", "B3", "C4", "C5", "E1"],
    "3": ["A1", "A2", "A9", "A10", "D5"],
    "4": ["C3", "C4", "C5", "D4", "D5", "D6"],
    "27": ["A5", "B5", "C5", "D5", "E5"]
  };

  // Retrieve dynamic occupied seats from localstorage and merge with static presets
  const localOccupied = JSON.parse(localStorage.getItem(`occupied_${selectedMovieId}`)) || [];
  const staticOccupied = mockOccupied[selectedMovieId] || ["B4", "B5", "D2", "D3"];
  const occupiedSeats = [...new Set([...staticOccupied, ...localOccupied])];

  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seat) => {
    if (occupiedSeats.includes(seat)) return;

    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((item) => item !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const handleProceed = () => {
    if (selectedSeats.length === 0) {
      alert("⚠️ Please select at least one seat to proceed!");
      return;
    }

    localStorage.setItem("selectedSeats", JSON.stringify(selectedSeats));
    navigate("/payment");
  };

  const ticketPrice = 200;
  const totalAmount = selectedSeats.length * ticketPrice;

  return (
    <div className="seat-booking-page">
      <div className="section-header">
        <h2 className="section-title">Select Your Seats</h2>
      </div>

      <div className="seat-booking-container">
        {/* Cinema Seating Map panel */}
        <div className="glass cinema-screen-area">
          <div className="projector-glow"></div>
          <div className="projector-screen"></div>
          <div className="screen-tag">DOLBY DIGITAL CINEMA SCREEN</div>

          <div className="seat-grid-stadium">
            {seats.map((seat) => {
              const isOccupied = occupiedSeats.includes(seat);
              const isSelected = selectedSeats.includes(seat);
              
              let seatClass = "seat-element";
              if (isOccupied) seatClass += " occupied";
              else if (isSelected) seatClass += " selected-seat";

              return (
                <button
                  key={seat}
                  className={seatClass}
                  disabled={isOccupied}
                  onClick={() => handleSeatClick(seat)}
                >
                  {seat}
                </button>
              );
            })}
          </div>

          <div className="seating-legend">
            <div className="legend-item">
              <span className="legend-box available"></span> Available
            </div>
            <div className="legend-item">
              <span className="legend-box selected"></span> Selected
            </div>
            <div className="legend-item">
              <span className="legend-box occupied"></span> Occupied
            </div>
          </div>
        </div>

        {/* Dynamic checkout panel */}
        <div className="glass summary-panel">
          <h3 className="summary-title">{selectedMovie}</h3>

          <div className="summary-row">
            <span>Showtime</span>
            <span>Today, 7:30 PM</span>
          </div>
          <div className="summary-row">
            <span>Seat Count</span>
            <span>{selectedSeats.length} Ticket{selectedSeats.length === 1 ? "" : "s"}</span>
          </div>

          <div className="summary-row" style={{ flexDirection: "column", gap: "8px" }}>
            <span>Selected Seats</span>
            <div className="seats-tag-container">
              {selectedSeats.length === 0 ? (
                <em style={{ color: "#8c9bb4", fontSize: "13px" }}>No seats selected</em>
              ) : (
                selectedSeats.map((seat) => (
                  <span key={seat} className="seat-tag">
                    {seat}
                  </span>
                ))
              )}
            </div>
          </div>

          <div className="summary-total">
            <span>Total Payable</span>
            <span>₹{totalAmount}</span>
          </div>

          <button className="btn btn-primary" style={{ width: "100%" }} onClick={handleProceed}>
            Proceed to Checkout 💰
          </button>
        </div>
      </div>
    </div>
  );
}

export default SeatBooking;
