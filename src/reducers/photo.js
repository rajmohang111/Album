import { handleActions } from "redux-actions";

const initialState = [];

export const photoReducer = handleActions({
  SET_PHOTOS: (state, action) => ({
    ...state,
    photos: action.payload
  })
}, initialState);
