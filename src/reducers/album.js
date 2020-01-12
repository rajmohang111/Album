import { handleActions } from "redux-actions";

const initialState = [];

export const albumReducer = handleActions({
   SET_ALBUMS: (state, action) => {
       console.log('"SET_ALBUMS"', action)
       return {
       albums : [...action.payload]
    }
   }
  }, initialState);
