import { handleActions } from "redux-actions";

const initialState = [];

export const setAlbumReducer = (state, action) => {
   return {
      ...state,
      albums: action.payload
   }
};

export const albumReducer = handleActions({
   SET_ALBUMS: setAlbumReducer
}, initialState);
