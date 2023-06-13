import {IPost} from "models/post";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {getUserPosts} from "services/services";

interface IFetchUserPostsResponse {
    /** Список постов пользователя*/
    readonly posts: IPost[],
}

export const fetchUserPosts = createAsyncThunk<IFetchUserPostsResponse, number, { readonly rejectValue: string; }>(
    'fetchUserPosts',
    async (userId, thunkAPI) => {
        try {
            const response = await getUserPosts(userId);
            return {posts: response.data}
        } catch (e: unknown) {
            return thunkAPI.rejectWithValue('Ошибка получения данных');
        }
    }
)