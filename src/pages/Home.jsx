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
  const movieText = "Harry";
  const showText = "Friends"

  //   const getMoviesFromService = async (movie, type) => {
  //     const movieText = movie;
  //     const movieType = type;
  //     const data = await getAllMovies(movieText, movieType);
  //     dispatch(addMovies(data));
  //   };

  useEffect(() => {
    // getMoviesFromService("harry", "movie");
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(showText));
  }, [dispatch]);
  return (
    <div>
      <MovieListing />
    </div>
  );
};

export default Home;
