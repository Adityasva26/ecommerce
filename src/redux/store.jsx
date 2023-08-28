// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './postSlice.js';

const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});

export default store;
