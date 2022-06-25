import {createSlice} from '@reduxjs/toolkit';
import songs from "../../Assets/music.json";
const songsSlice = createSlice({
  name: 'songs',
  initialState: {
    songs: [ ...songs.data ],
    lastSongsStatus: {},
  },
  reducers: {
    addSongs(state, action) {
      state.songs = action.payload;
    },
    changeSongsStatus(state, action) {
      state.lastSongsStatus = {
        ...action.payload,
      };
    },
  },
});

export const {addSongs, changeSongsStatus} = songsSlice.actions;
export default songsSlice.reducer;