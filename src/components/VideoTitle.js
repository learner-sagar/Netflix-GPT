const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video text-white pt-24 md:pt-40 pl-4 md:pl-14 box-border">
      <h1 className="text-4xl  font-bold mb-5 md:mb-7 ">{title}</h1>
      <p className="w-72 hidden md:block">{overview}</p>
      <div className="mt-3 ">
        <button className="py-1 px-3 bg-white rounded-md md:px-9 md:py-3 text-black">
          Play
        </button>
        <button className="py-1 px-3 bg-slate-600 rounded-md ml-5 bg-opacity-40 md:px-9 md:py-3">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
