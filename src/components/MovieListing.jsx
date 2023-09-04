import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const MovieListing = () => {
  //useSelector es un hook de redux que nos permite obtener el state guardado en Redux o algun dato específico de éste. En este ejemplo, el primer "movies" hace referencia al nombre que está en el archivo store
  // y el segundo, al que creamos en el archivo Slice.
  // (https://www.scaler.com/topics/react/useselector-and-usedispatch/)
  const info = useSelector((state) => state.movies.movies);

  return (
    <div>
      <h1>Movie Listing</h1>
      <MovieCard />
    </div>
  );
};

export default MovieListing;
