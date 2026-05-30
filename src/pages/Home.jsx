import { useNavigate } from "react-router-dom";
import movies from "../data/moviesData";
import "./Home.css";

function Home() {
  const navigate = useNavigate();
  
  // Show first 8 movies as blockbusters on landing page
  const featuredMovies = movies.slice(0, 8);

  return (
    <div className="home-container">
      <div className="hero-banner">
        <h1 class="hero-title">IMMERSE YOURSELF IN THE MOVIES</h1>
        <p className="hero-tagline">
          Book tickets to the latest blockbusters in premium Dolby Atmos theaters in seconds.
        </p>
        <div>
          <button className="btn btn-primary" onClick={() => navigate("/movies")}>
            Explore Catalog 🎟
          </button>
        </div>
      </div>

      <div className="section-header">
        <h2 className="section-title">Blockbuster Releases</h2>
        <button className="btn btn-secondary" onClick={() => navigate("/movies")}>
          View All
        </button>
      </div>

      <div className="featured-grid">
        {featuredMovies.map((movie) => (
          <div key={movie.id} className="movie-card glass" onClick={() => navigate(`/movie/${movie.id}`)}>
            <div className="movie-card-img-wrapper">
              <img src={movie.image} alt={movie.title} />
              <div className="movie-card-overlay">
                <button
                  className="btn btn-primary btn-sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    localStorage.setItem("selectedMovie", movie.title);
                    localStorage.setItem("selectedMovieId", movie.id.toString());
                    navigate("/seat-booking");
                  }}
                >
                  Book Tickets 🎟
                </button>
              </div>
            </div>
            <div className="movie-card-info">
              <h3 className="movie-card-title">{movie.title}</h3>
              <div className="movie-card-meta">
                <span className="rating-badge">⭐ {movie.rating}</span>
                <span className="movie-genre">{movie.genre}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
