import {createSelector} from "@reduxjs/toolkit";
import {RootState} from "../store";

const baseSelectorPosts = createSelector(
    (state: RootState) => state,
    (state) => state.postsReducer,
);

export const selectorPostsLoading = createSelector(baseSelectorPosts, state => state.loading)
export const selectorPostsError = createSelector(baseSelectorPosts, state => state.error)
export const selectorPosts = createSelector(baseSelectorPosts, state => state.posts)