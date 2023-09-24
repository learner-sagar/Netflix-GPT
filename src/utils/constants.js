export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: process.env.REACT_APP_TMDB_TOKEN,
  },
};

export const YOUTUBE_URL = "https://www.youtube.com/watch?v=";
export const TMDB_IMAGE_URL = "https://image.tmdb.org/t/p/w200/";
