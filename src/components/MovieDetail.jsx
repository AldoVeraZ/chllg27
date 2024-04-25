import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../css/MovieDetail.css";

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=c903d84395f980a96f908ae26ef732d9`
    )
      .then((response) => response.json())
      .then((data) => setMovie(data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, [id]);

  if (!movie) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="movie-detail">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="movie-info">
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
        {movie.genres && (
          <p>Género: {movie.genres.map((genre) => genre.name).join(", ")}</p>
        )}
        <p>Duración: {movie.runtime} minutos</p>
      </div>
    </div>
  );
}

export default MovieDetail;
