import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const mainMovie = movies[0];
  const { id, original_title, overview } = mainMovie;
  console.log(mainMovie);
  return (
    <div>
      <div className="absolute top-0 t-0 z-10 bg-gradient-to-r from-black">
        <VideoTitle title={original_title} overview={overview} />
      </div>
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
