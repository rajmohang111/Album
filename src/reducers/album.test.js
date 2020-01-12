import { setAlbumReducer } from './album';

const state = [];

const action = {
    payload: [
        {
            userId: 1,
            id: 1,
            title: 'quidem molestiae enim'
          },
    ]
};

const result = {
    albums: [
        {
            userId: 1,
            id: 1,
            title: 'quidem molestiae enim'
          },
    ]
};

test('Test setAlbumReducer', () => {
    expect(setAlbumReducer(state, action)).toMatchObject(result);
});