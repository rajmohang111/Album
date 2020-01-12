import { setPhotoReducer } from './photo';

const state = [];

const action = {
    payload: [
        {
            albumId: 2,
            id: 51,
            title: 'non sunt voluptatem placeat consequuntur rem incidunt',
            url: 'https://via.placeholder.com/600/8e973b',
            thumbnailUrl: 'https://via.placeholder.com/150/8e973b'
        },
    ]
};

const result = {
    photos: [
        {
            albumId: 2,
            id: 51,
            title: 'non sunt voluptatem placeat consequuntur rem incidunt',
            url: 'https://via.placeholder.com/600/8e973b',
            thumbnailUrl: 'https://via.placeholder.com/150/8e973b'
        },
    ]
};

test('Test setPhotoReducer', () => {
    expect(setPhotoReducer(state, action)).toMatchObject(result);
});