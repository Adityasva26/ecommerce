// redux/postsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPosts, createPost, deletePost,updatepost } from '../api';


export const fetchPostsAsync = createAsyncThunk('posts/fetchPosts', async (token) => {

  const posts = await fetchPosts(token).catch((err)=>{
    console.log(err.message)
});
  return posts;
});

export const createPostAsync = createAsyncThunk('posts/createPost', async (token,postData) => {
  const newPost = await createPost(token,postData);
  return newPost;
});

export const deletePostAsync = createAsyncThunk('posts/deletePost', async (token,postId) => {

  // Assuming deletePost function takes the postId as an argument
  await deletePost(token,postId).catch((err)=>{
    console.log("err",err)
});
  return postId; // Return the deleted postId if you need it
});
export const updatepostAsync = createAsyncThunk('posts/updatepost', async (token,postData) => {

  const newPost = await updatepost(token,postData);
  return newPost;
});

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    data: [],
    action:{},
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
        state.action=action.payload
      })
      .addCase(createPostAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updatepostAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(updatepostAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.action=action.payload;
      })
      .addCase(updatepostAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deletePostAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(deletePostAsync.fulfilled, (state, action) => {
        state.loading = false;
        // Remove the deleted post from the state
        state.action = state.data.filter((post) => post.id !== action.payload);
      })
      .addCase(deletePostAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default postsSlice.reducer;
