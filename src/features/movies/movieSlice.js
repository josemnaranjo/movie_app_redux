import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import { getAllMovies } from "../../services/movie.services";

//Thunk es un middleware de Redux que nos permite crear reducers que manejen funciones asincronas.
//createAsyncThunk recibe dos parámetros.
//El primero es el nombre de la acción, que por convención llamamos [slice name]/[action name].
// El segundo parámetro es el callback que realiza el llamado asincrono.
// mas info : https://dev.to/ifeanyichima/what-is-createasyncthunk-in-redux--mhe

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const movie = "harry";
    const type = "movie";
    const data = await getAllMovies(movie, type);
    return data;
  }
);

const initialState = {
  movies: {},
};

const movieSlice = createSlice({
  name: "movies",

  initialState,

  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },

  // las llamadas creadas en el thuk se colocan en esta parte, "extraReducer".
  //cada acción creada usando "createAsyncThunk" genera treas states. Pending, fulfilled y rejected. Uno decide
  //qué hara cada state.
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("fetched completed");
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("rejected");
    },
  },
});

export const { addMovies } = movieSlice.actions;
export default movieSlice.reducer;
