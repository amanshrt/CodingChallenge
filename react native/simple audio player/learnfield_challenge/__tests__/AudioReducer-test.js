import reducer, { addSongs, changeSongsStatus } from "./../src/Config/Slice/audio"
import songs from './../src/Assets/music.json';
test('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual(
    {
      songs: [...songs.data],
      lastSongsStatus: {},
    }
  );
});
