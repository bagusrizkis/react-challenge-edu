import { ADD_FAVORITE, INCREMENT } from "../actionTypes";

export const increment = (number) => {
  return {
    type: INCREMENT,
    payload: number,
  };
};

export const addFavorite = (favPayload) => {
  return {
    type: ADD_FAVORITE,
    payload: favPayload,
  };
};
