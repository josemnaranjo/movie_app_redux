import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncMovieOrShowDetail } from "../features/movies/movieSlice";

const Detail = () => {
  const { imdbID } = useParams();
  const disptach = useDispatch();
  const info = useSelector((state) => state.movies.detail);

  useEffect(() => {
    disptach(fetchAsyncMovieOrShowDetail(imdbID));
  }, [disptach, imdbID]);
  return (
    <div className="grid grid-cols-2 h-[calc(100vh-9.7rem)]">
      <div className="flex flex-col justify-center">
        <h1 className="font-bold text-4xl">{info.Title}</h1>
        <div className="flex gap-3 text-cyan-700 py-3">
          <p>IMDB Rating: {info.imdbRating} </p>
          <p>IMDB Votes: {info.imdbVotes} </p>
          <p>Runtime: {info.Runtime} </p>
          <p>Year: {info.Year} </p>
        </div>
        <h3 className="text-lg py-3">{info.Plot}</h3>
        <div className="flex flex-col gap-3">
          <p>
            <span className="font-extrabold">Director:</span> {info.Director}
          </p>
          <p>
            <span className="font-extrabold">Stars:</span> {info.Actors}
          </p>
          <p>
            <span className="font-extrabold">Genre:</span> {info.Genre}
          </p>
          <p>
            <span className="font-extrabold">Language:</span> {info.Language}
          </p>
          <p>
            <span className="font-extrabold">Awards:</span> {info.Awards}
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <img src={info.Poster} alt={info.Title} className="w-fit" />
      </div>
    </div>
  );
};

export default Detail;
