import {configureStore} from '@reduxjs/toolkit';
import songsReducer from "./Slice/audio"

export const store = configureStore({
  reducer: {
    audio: songsReducer,
  },
});
