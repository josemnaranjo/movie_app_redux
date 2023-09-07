import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import { getAll, getOne } from "../../services/movie.services";

//Thunk es un middleware de Redux que nos permite crear reducers que manejen funciones asincronas.
//createAsyncThunk recibe dos parámetros.
//El primero es el nombre de la acción, que por convención llamamos [slice name]/[action name].
// El segundo parámetro es el callback que realiza el llamado asincrono.
// mas info : https://dev.to/ifeanyichima/what-is-createasyncthunk-in-redux--mhe

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const name = "harry";
    const type = "movie";
    const data = await getAll(name, type);
    return data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async () => {
    const name = "Friends";
    const type = "series";
    const data = await getAll(name, type);
    return data;
  }
);

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
  "movies/fetchAsyncMovieOrShowDetail",
  async (id) => {
    const data = await getOne(id);
    return data;
  }
);

const initialState = {
  movies: {},
  shows: {},
  detail: {},
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
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("fetched completed");
      return { ...state, shows: payload };
    },
    [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
      console.log("fetched completed");
      return { ...state, detail: payload };
    },
  },
});

export const { addMovies } = movieSlice.actions;
export default movieSlice.reducer;
