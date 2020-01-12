
import * as API from '../service/api';

export function setPhotos(photos) {
  return (dispatch, getState) => {
    dispatch({ type: "SET_PHOTOS", payload: photos })
  }
}

export function getPhotos(id) {
  return (dispatch, getState) => {
    API.getPhotos(id)
      .then(photos => {
        dispatch({ type: "SET_PHOTOS", payload: photos })
      }
      );
  };
}

