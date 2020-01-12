
import * as API from '../Services/Api';

export function setAlbum(albums) {
  return (dispatch, getState) => {
    dispatch({ type: "SET_ALBUMS", payload: albums })
  };
}

export function getAlbum(albums) {
  return (dispatch, getState) => {
    API.getAlbums()
      .then(albums => {
        dispatch({ type: "SET_ALBUMS", payload: albums })
      }
      );
  };
}

