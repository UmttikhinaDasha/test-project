import {createAsyncThunk} from "@reduxjs/toolkit";
import {getPosts} from "services/services";
import {IPost} from "models/post";

interface IFetchPostsResponse {
    /** Список постов */
    readonly posts: IPost[],
    /** Количество постов */
    readonly totalCount: number
}

export const fetchPosts = createAsyncThunk<IFetchPostsResponse, number, { readonly rejectValue: string; }>(
    'fetchPosts',
    async (page, thunkAPI) => {
        try {
            const response = await getPosts(page);
            return {posts: response.data, totalCount: Number(response.headers['x-total-count'])}
        } catch (e: unknown) {
            return thunkAPI.rejectWithValue('Ошибка получения данных');
        }
    }
)
