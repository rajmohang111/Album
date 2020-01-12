
import * as API from '../Services/Api';

export function getPhotos(id) {
  return (dispatch, getState) => {
    API.getPhotos(id)
      .then(photos => {
        dispatch({ type: "SET_PHOTOS", payload: photos })
      }
      );
  };
}

