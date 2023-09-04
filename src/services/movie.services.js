import axios from "axios";
import { APIKey } from "./movieKey";

const basicURL = "https://www.omdbapi.com/";

export const getAllMovies = async (movie, type) => {
  try {
    const movies = await axios.get(
      basicURL + "?apiKey=" + APIKey + "&s=" + movie + "&type=" + type
    );
    return movies.data;
  } catch (error) {
    return error.message;
  }
};
