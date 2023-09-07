import { useEffect } from "react";
import MovieListing from "../components/MovieListing";
import { useDispatch } from "react-redux";
import {
//   addMovies,
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../features/movies/movieSlice";

const Home = () => {
  const dispatch = useDispatch();

  //   const getMoviesFromService = async (movie, type) => {
  //     const movieText = movie;
  //     const movieType = type;
  //     const data = await getAllMovies(movieText, movieType);
  //     dispatch(addMovies(data));
  //   };

  useEffect(() => {
    // getMoviesFromService("harry", "movie");
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncShows());
  }, [dispatch]);
  return (
    <div>
      <MovieListing />
    </div>
  );
};

export default Home;
