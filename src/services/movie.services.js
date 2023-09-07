import axios from "axios";
import { APIKey } from "./movieKey";

const basicURL = "https://www.omdbapi.com/";

export const getAll = async (name, type) => {
  try {
    const response = await axios.get(
      basicURL + "?apiKey=" + APIKey + "&s=" + name + "&type=" + type
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
};

export const getOne = async (id) => {
  try {
    const response = await axios.get(
      basicURL + "?apiKey=" + APIKey + "&i=" + id + "&plot=full"
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
};
