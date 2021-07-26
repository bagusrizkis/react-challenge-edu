import { ADD_MOVIES, ADD_PAGE, SET_ERROR, SET_LOADING } from "../actionTypes";

export const addMovie = (payload) => {
  return {
    type: ADD_MOVIES,
    payload: payload,
  };
};

export const addPage = (payload) => {
  return {
    type: ADD_PAGE,
    payload: payload,
  };
};

export const setError = (payload) => {
  return {
    type: SET_ERROR,
    payload: payload,
  };
};

export const setLoading = (payload) => {
  return {
    type: SET_LOADING,
    payload: payload,
  };
};

export const getGames = () => {
  return async (dispatch, oldState) => {
    const response = await fetch(
      "https://api.rawg.io/api/games" +
        "?&key=" +
        process.env.REACT_APP_RAWG_SECRET +
        "&page=" +
        oldState().game.page
    );
    const resp = await response.json();
    dispatch(addMovie(resp.results));
    dispatch(setError(false));
    dispatch(setLoading(false));
    dispatch(addPage(1));
  };
};

export const loadMore = () => {
  return async (dispatch, oldState) => {
    const response = await fetch(
      "https://api.rawg.io/api/games" +
        "?&key=" +
        process.env.REACT_APP_RAWG_SECRET +
        "&page=" +
        oldState().game.page
    );
    const resp = await response.json();
    dispatch(addMovie(resp.results));
    dispatch(addPage(1));
  };
};
