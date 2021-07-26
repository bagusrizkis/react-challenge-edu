import { createStore } from "redux";
import { ADD_FAVORITE, INCREMENT } from "../actionTypes";

const INITIAL_STATE = {
  count: 0,
  favorites: [],
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + action.payload };
    case ADD_FAVORITE:
      return { ...state, favorites: [...state.favorites, action.payload] };
    default:
      return state;
  }
}

let store = createStore(reducer);

export default store;
