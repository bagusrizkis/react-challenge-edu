import { ADD_FAVORITE } from "../actionTypes";

function reducer(
  state = {
    favorites: [],
  },
  action
) {
  switch (action.type) {
    case ADD_FAVORITE:
      return { ...state, favorites: [...state.favorites, action.payload] };
    default:
      return state;
  }
}

export default reducer;
