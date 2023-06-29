import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../store';

const baseSelectorPosts = createSelector(
    (state: RootState) => state,
    state => state.userReducer,
);

export const selectorUserLoading = createSelector(baseSelectorPosts, state => state.loading);
export const selectorUserError = createSelector(baseSelectorPosts, state => state.error);
export const selectorUser = createSelector(baseSelectorPosts, state => state.user);
