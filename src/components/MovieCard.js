import React from "react";
import { TMDB_IMAGE_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div>
      <img
        src={TMDB_IMAGE_URL + posterPath}
        alt="Movie Card"
        className="w-48 max-w-none"
      />
    </div>
  );
};

export default MovieCard;
