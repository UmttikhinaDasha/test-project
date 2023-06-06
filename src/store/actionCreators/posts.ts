import {createAsyncThunk} from "@reduxjs/toolkit";
import {getPosts} from "../../services/services";
import {IPost} from "../../models/post";


export const fetchPosts = createAsyncThunk<IPost[], undefined, { readonly rejectValue: string; }>(
    'fetchPosts',
    async (_, thunkAPI) => {
        try {
            const response = await getPosts();
            return response.data
        } catch (e: unknown) {
            return thunkAPI.rejectWithValue('Ошибка получения данных');
        }
    }
)
