import { useEffect, useState } from "react";
import { API_OPTIONS, YOUTUBE_URL } from "../utils/constants";

const VideoBackground = ({ movieId }) => {
  const [videoKey, setVideoKey] = useState("");
  const getMovieTrailerKey = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    const trailer = json.results.find((video) => video.type === "Trailer");
    return trailer ? trailer.key : json.results[0].key;
  };
  useEffect(() => {
    getMovieTrailerKey().then((trailerKey) => {
      setVideoKey(trailerKey);
    });
  }, []);
  return (
    <div className="w-full">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          videoKey +
          "?autoplay=1&mute=1&controls=0"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
