import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const MovieListing = () => {
  //useSelector es un hook de redux que nos permite obtener el state guardado en Redux o algun dato específico de éste. En este ejemplo, el primer "movies" hace referencia al nombre que está en el archivo store
  // y el segundo, al que creamos en el archivo Slice.
  // (https://www.scaler.com/topics/react/useselector-and-usedispatch/)
  const movies = useSelector((state) => state.movies.movies);
  const shows = useSelector((state) => state.movies.shows);

  return (
    <div>
      <div className="mt-5">
        <h2 className="mb-5 font-bold text-neutral-200 text-2xl">Movies</h2>
        <div className="grid grid-cols-4 gap-5">
          {movies.Search?.map((movie, idx) => (
            <MovieCard data={movie} key={idx} />
          ))}
        </div>
      </div>
      <div className="mt-5">
        <h2 className="mb-5 font-bold text-neutral-200 text-2xl">Shows</h2>
        <div className="grid grid-cols-4 gap-5">
          {shows.Search?.map((movie, idx) => (
            <MovieCard data={movie} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieListing;
