import { combineReducers } from "redux";
import game from "./gameReducers";
import favorite from "./favoriteReducers";

const combineReducer = combineReducers({
  game,
  favorite,
});

export default combineReducer;
