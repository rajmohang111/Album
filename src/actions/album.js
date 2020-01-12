
import * as API from '../services/api';

export function setAlbum(albums) {
  return (dispatch) => {
    dispatch({ type: "SET_ALBUMS", payload: albums })
  };
}

export function getAlbum(albums) {
  return (dispatch) => {
    API.getAlbums()
      .then(albums => {
        dispatch({ type: "SET_ALBUMS", payload: albums })
      }
      );
  };
}

