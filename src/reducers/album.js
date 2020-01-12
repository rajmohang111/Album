import { handleActions } from "redux-actions";

const initialState = [];

export const albumReducer = handleActions({
   SET_ALBUMS: (state, action) => {
       return {
          ...state,
       albums : action.payload
    }
   }
  }, initialState);
