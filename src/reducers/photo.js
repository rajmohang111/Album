import { handleActions } from "redux-actions";

const initialState = [];

export const setPhotoReducer = (state, action) => ({
  ...state,
  photos: action.payload
});

export const photoReducer = handleActions({
  SET_PHOTOS: setPhotoReducer
}, initialState);
