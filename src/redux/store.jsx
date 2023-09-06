// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './postSlice.js';
import loginslice from './loginslice.js';


const store = configureStore({
  reducer: {
    posts: postsReducer,
    login: loginslice,
  },
});

export default store;
