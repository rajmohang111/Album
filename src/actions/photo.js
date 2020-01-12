import fetch from "cross-fetch";

const API_ENDPOINT = 'https://jsonplaceholder.typicode.com';

const ALBUMS_LIMIT = 25; // hardcoded as per requirement

export function list(albumId) {
  return (dispatch, getState) => {
    // Implement list photos action here.
    const albums = await fetch(`${API_ENDPOINT}/photos?albumId=${albumId}&_limit=${ALBUMS_LIMIT}`);
    return albums.json();
  };
}
