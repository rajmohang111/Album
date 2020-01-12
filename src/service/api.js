
const API_ENDPOINT = 'https://jsonplaceholder.typicode.com';

const ALBUMS_LIMIT = 25;
const PHOTOS_LIMIT = 12;

export async function getAlbums() {
    const albums = await fetch(`${API_ENDPOINT}/albums?_limit=${ALBUMS_LIMIT}`);
    return albums.json();
}

export async function getPhotos(albumId) {
    const albums = await fetch(`${API_ENDPOINT}/photos?albumId=${albumId}&_limit=${PHOTOS_LIMIT}`);
    return albums.json();
}