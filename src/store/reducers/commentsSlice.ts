import {createSlice} from "@reduxjs/toolkit";
import {IComment} from "models/comment";
import {fetchComments} from "store/actionCreators/comments";

interface IObjComments {
    /** ключ - id поста
     * значение - список комментариев к посту */
    [postId: number]: IComment[]
}

interface ICommentsState{
    /** Отображение загрузки данных */
    readonly loading: boolean;
    /** Ошибка загрузки данных */
    readonly error: null | string;
    /** Объект комментариев */
    readonly comments: IObjComments;
}

const initialState: ICommentsState = {
    loading: false,
    error: null,
    comments: [],
}

export const commentsSlice = createSlice({
    name: 'commentsSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(fetchComments.pending, state => {
                state.loading = true;
            })
            .addCase(fetchComments.fulfilled, (state, action)=> {
                state.loading = false;
                state.error = null;
                if(!(action.payload.postId in state.comments)){
                    state.comments = {...state.comments, [action.payload.postId]: action.payload.comments}
                }
            })
            .addCase(fetchComments.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload ?? '';
            }),
})

export default commentsSlice.reducer;