import {createAsyncThunk} from "@reduxjs/toolkit";
import {getPosts} from "services/services";
import {IPost} from "models/post";
import {TSort} from "models/sort";

interface IFetchPostsResponse {
    /** Список постов */
    readonly posts: IPost[],
    /** Количество постов */
    readonly totalCount: number
}

interface IRequestParams {
    /** Страница запрашиваемых данных*/
    readonly page: number,
    /** Тип сортировки */
    readonly sort?: TSort;
    /** Строка для поиска заголовка */
    readonly search?: string;
}

export const fetchPosts = createAsyncThunk<IFetchPostsResponse, IRequestParams, { readonly rejectValue: string; }>(
    'fetchPosts',
    async ({page, sort, search}, thunkAPI) => {
        try {
            const response = await getPosts(page, sort, search);
            return {posts: response.data, totalCount: Number(response.headers['x-total-count'])}
        } catch (e: unknown) {
            return thunkAPI.rejectWithValue('Ошибка получения данных');
        }
    }
)
