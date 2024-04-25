import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/Home.css";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=c903d84395f980a96f908ae26ef732d9"
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results.slice(0, 5)))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <div className="home">
      <h1>Bienvenidos a Nuestra Plataforma de Streaming</h1>
      <div className="movie-grid">
        {movies.map((movie) => (
          <div className="movie-item" key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
              />
              <p>{movie.title}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
