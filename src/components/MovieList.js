import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="mt-8 m-4">
      <div>
        <h1 className="text-white mb-3 font-bold text-2xl">{title}</h1>
      </div>
      <div className="flex overflow-x-scroll gap-4 no-scrollbar">
        {movies &&
          movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
      </div>
    </div>
  );
};

export default MovieList;
