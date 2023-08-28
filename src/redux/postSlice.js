// redux/postsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPosts , createPost  } from '../api';

export const fetchPostsAsync = createAsyncThunk('posts/fetchPosts', async () => {
  const posts = await fetchPosts();
  return posts;
});

export const createPostAsync = createAsyncThunk('posts/createPost', async (postData) => {
  const newPost = await createPost(postData);
  return newPost;
});

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostsAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPostsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchPostsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createPostAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(createPostAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.data.push(action.payload);
      })
      .addCase(createPostAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default postsSlice.reducer;
