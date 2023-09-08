import { useState } from "react";
import { Link } from "react-router-dom";
import { BsPersonCircle, BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../features/movies/movieSlice";

const Header = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (term === "") return alert("Please enter a search term");
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    setTerm("");
  };
  return (
    <div className="bg-cyan-900 p-6 flex justify-between items-center drop-shadow-xl">
      <Link to="/">
        <h1 className="text-2xl">Movie App</h1>
      </Link>
      <div>
        <form className="flex gap-1" onSubmit={submitHandler}>
          <input
            type="text"
            value={term}
            placeholder="Buscar peliculas o shows"
            onChange={(e) => setTerm(e.target.value)}
            className="rounded text-black px-1"
          />
          <button type="submit" className="bg-slate-500 p-1 rounded">
            <BsSearch />
          </button>
        </form>
      </div>
      <BsPersonCircle className="h-10 w-10" />
    </div>
  );
};

export default Header;
