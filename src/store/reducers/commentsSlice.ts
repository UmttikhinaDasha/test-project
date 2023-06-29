import { createSlice } from '@reduxjs/toolkit';
import { IComment } from 'models/comment';
import { fetchComments } from 'store/actionCreators/comments';

interface IObjComments {

    /** Ключ - id поста
     * значение - список комментариев к посту. */
    [postId: number]: IComment[];
}

interface ICommentsState {

    /** Массив id постов, для которых загружаются комментарии. */
    readonly loading: number[];

    /** Ошибка загрузки данных. */
    readonly error: null | string;

    /** Объект комментариев. */
    readonly comments: IObjComments;
}

const initialState: ICommentsState = {
    loading: [],
    error: null,
    comments: [],
};

export const commentsSlice = createSlice({
    name: 'commentsSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(fetchComments.pending, (state, action) => {
                const postId = action.meta.arg;
                if (!(postId in state.comments)) {
                    state.loading = [...state.loading, postId];
                }
            })
            .addCase(fetchComments.fulfilled, (state, action) => {
                const { postId } = action.payload;
                state.error = null;
                if (!(postId in state.comments)) {
                    state.comments = { ...state.comments, [action.payload.postId]: action.payload.comments };
                    state.loading = state.loading.filter(el => el !== postId);
                }
            })
            .addCase(fetchComments.rejected, (state, action) => {
                state.loading = [];
                state.error = action.payload ?? '';
            }),
});

export default commentsSlice.reducer;
