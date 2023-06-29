import { IPost } from 'models/post';
import { createSlice } from '@reduxjs/toolkit';

import { fetchUserPosts } from 'store/actionCreators/userPosts';

import { fetchPosts } from '../actionCreators/posts';

interface IPostsState {

    /** Отображение загрузки данных. */
    readonly loading: boolean;

    /** Ошибка загрузки данных. */
    readonly error: null | string;

    /** Список постов. */
    readonly posts: IPost[];

    /** Общее количество постов. */
    readonly totalCount: number;
}

const initialState: IPostsState = {
    loading: false,
    error: null,
    posts: [],
    totalCount: 0,
};

export const postsSlice = createSlice({
    name: 'postsSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(fetchPosts.pending, state => {
                state.loading = true;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.posts = action.payload.posts;
                state.totalCount = action.payload.totalCount;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload ?? '';
                state.posts = [];
            })
            .addCase(fetchUserPosts.pending, state => {
                state.loading = true;
            })
            .addCase(fetchUserPosts.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.posts = action.payload.posts;
            })
            .addCase(fetchUserPosts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload ?? '';
                state.posts = [];
            }),
});

export default postsSlice.reducer;
