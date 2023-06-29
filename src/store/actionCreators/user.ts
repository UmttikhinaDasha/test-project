import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUser } from 'models/user';
import { getUserData } from 'services/services';

import { userMapper } from '../../mapper/user';

interface IFetchUserResponse {

    /** Данные пользователя. */
    readonly user: IUser;
}

export const fetchUser = createAsyncThunk<IFetchUserResponse, number, { readonly rejectValue: string; }>(
    'fetchUser',
    async(userId, thunkAPI) => {
        try {
            const response = await getUserData(userId);
            return { user: userMapper(response.data) };
        } catch (e: unknown) {
            return thunkAPI.rejectWithValue('Ошибка получения данных');
        }
    },
);
