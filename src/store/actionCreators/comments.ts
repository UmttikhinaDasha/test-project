import {createAsyncThunk} from "@reduxjs/toolkit";
import {getComments} from "services/services";
import {IComment} from "models/comment";

interface IFetchCommentsResponse {
    /** Список комментариев */
    readonly comments: IComment[],
    /** Идентификатор поста комментариев */
    readonly postId: number
}

export const fetchComments = createAsyncThunk<IFetchCommentsResponse, number, { readonly rejectValue: string; }>(
    'fetchComments',
    async (postId, thunkAPI) => {
        try {
            const response = await getComments(postId);
            return {comments: response.data, postId}
        } catch (e: unknown) {
            return thunkAPI.rejectWithValue('Ошибка получения данных');
        }
    }
)