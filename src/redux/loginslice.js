import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login } from '../api';

export const loginpostasync = createAsyncThunk('posts/login', async (postData) => {
    console.log("postData,",postData)
    const newPost = await login(postData);
    return newPost;
});

const loginslice = createSlice({
    name: 'login',
    initialState: {
        data:{},
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginpostasync.pending, (state) => {
                state.loading = true;
            })
            .addCase(loginpostasync.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(loginpostasync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    },
})
export default loginslice.reducer;