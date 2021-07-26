import { ADD_MOVIES, ADD_PAGE, SET_ERROR, SET_LOADING } from "../actionTypes";

function reducer(
  state = {
    games: [],
    loading: true,
    error: false,
    page: 1,
  },
  action
) {
  switch (action.type) {
    case ADD_MOVIES:
      return { ...state, games: [...state.games, ...action.payload] };
    case ADD_PAGE:
      return { ...state, page: state.page + action.payload };
    case SET_ERROR:
      return { ...state, error: action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
}

export default reducer;
