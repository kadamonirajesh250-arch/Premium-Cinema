import { useState } from "react";
import { useNavigate } from "react-router-dom";
import movies from "../data/moviesData";
import "./Movies.css";

function Movies() {
  const navigate = useNavigate();
  const [searchVal, setSearchVal] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");

  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.title.toLowerCase().includes(searchVal.toLowerCase()) ||
                          movie.genre.toLowerCase().includes(searchVal.toLowerCase()) ||
                          (movie.genreLabel && movie.genreLabel.toLowerCase().includes(searchVal.toLowerCase()));
    
    const matchesGenre = selectedGenre === "All" || movie.genre === selectedGenre;

    return matchesSearch && matchesGenre;
  });

  const genres = ["All", "Marvel", "Sci-Fi", "Drama", "Family", "Action"];

  return (
    <div className="movies-catalog-container">
      <div className="search-filter-bar glass">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search by title, category, actor..."
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
          />
        </div>
        <div className="genre-filter-container">
          {genres.map((g) => (
            <div
              key={g}
              className={`genre-pill ${selectedGenre === g ? "active" : ""}`}
              onClick={() => setSelectedGenre(g)}
            >
              {g === "Action" ? "Action & Thriller" : g}
            </div>
          ))}
        </div>
      </div>

      <div className="section-header">
        <h2 className="section-title">
          {selectedGenre} Movies ({filteredMovies.length})
        </h2>
      </div>

      {filteredMovies.length === 0 ? (
        <div className="empty-state glass">
          <div className="empty-icon">🔍</div>
          <h3>No Movies Found</h3>
          <p style={{ color: "var(--text-muted)", marginTop: "8px" }}>
            Try typing a different keyword or removing active filters.
          </p>
        </div>
      ) : (
        <div className="featured-grid">
          {filteredMovies.map((movie) => (
            <div
              key={movie.id}
              className="movie-card glass"
              onClick={() => navigate(`/movie/${movie.id}`)}
            >
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
      )}
    </div>
  );
}

export default Movies;
