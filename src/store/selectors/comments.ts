import {createSelector} from "@reduxjs/toolkit";
import {RootState} from "store/store";

const baseSelectorComments = createSelector(
    (state: RootState) => state,
    (state) => state.commentsReducer,
);

export const selectorCommentsLoading = createSelector(baseSelectorComments, state => state.loading)
export const selectorCommentsError = createSelector(baseSelectorComments, state => state.error)
export const selectorComments = createSelector(baseSelectorComments, state => state.comments)