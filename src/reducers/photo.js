import { handleActions } from "redux-actions";

const initialState = [];

export const photoReducer = handleActions( {
  SET_PHOTOS: (state, action) => ({
      photos: [...action.payload]
    })
  }, initialState);
