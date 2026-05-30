import { useParams, useNavigate } from "react-router-dom";
import movies from "../data/moviesData";
import "./MovieDetails.css";

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movies.find((item) => item.id === Number(id));

  if (!movie) {
    return (
      <div className="movie-not-found glass">
        <h2>Movie Not Found</h2>
        <button className="btn btn-primary" onClick={() => navigate("/movies")}>
          Back to Movies Catalog
        </button>
      </div>
    );
  }

  const handleBookClick = () => {
    localStorage.setItem("selectedMovie", movie.title);
    localStorage.setItem("selectedMovieId", movie.id.toString());
    navigate("/seat-booking");
  };

  return (
    <div className="details-page-container">
      <div className="details-wrapper glass">
        <div className="details-backdrop" style={{ backgroundImage: `url(${movie.image})` }}></div>
        <img className="details-poster" src={movie.image} alt={movie.title} />

        <div className="details-info">
          <div className="details-header">
            <div className="rating-badge" style={{ marginBottom: "12px" }}>⭐ {movie.rating} rating</div>
            <h1 className="details-title">{movie.title}</h1>
            <div className="details-stats">
              <span className="stat-pill">🎭 {movie.genreLabel || movie.genre}</span>
              <span className="stat-pill">⏰ {movie.duration || "2h 30m"}</span>
              <span className="stat-pill">🌐 {movie.lang || "English"}</span>
              <span className="stat-pill">🍿 HD Stereo</span>
            </div>
          </div>

          <p className="details-desc">
            Experience premium cinematic quality! Join this spectacular, award-winning journey packed with dramatic storylines, immersive visual cinematography, and a masterpiece audio soundscape. Recommended for premium Dolby Cinema screenings.
          </p>

          <div className="specs-grid">
            <div className="spec-item">
              <span className="spec-label">Director</span>
              <span class="spec-value">Christopher Marcus</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Standard Price</span>
              <span className="spec-value">₹200 per ticket</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Language</span>
              <span className="spec-value">{movie.lang || "English"} Audio</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Certificate</span>
              <span className="spec-value">UA (13+)</span>
            </div>
          </div>

          <div>
            <button className="btn btn-primary" onClick={handleBookClick}>
              Book Tickets Now 🍿
            </button>
            <button className="btn btn-secondary" style={{ marginLeft: "12px" }} onClick={() => navigate("/movies")}>
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
