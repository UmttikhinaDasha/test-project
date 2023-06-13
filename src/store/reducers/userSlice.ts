import {createSlice} from "@reduxjs/toolkit";
import {IUser} from "models/user";
import {fetchUser} from "store/actionCreators/user";

interface IUserState {
    /** Отображение загрузки данных */
    readonly loading: boolean;
    /** Ошибка загрузки данных */
    readonly error: null | string;
    /** Данные пользователя */
    readonly user: IUser;
}

const initialState: IUserState = {
    loading: false,
    error: null,
    user: {
        id: null,
        name: '',
        userName: '',
        email: '',
        address: '',
        phone: '',
        website: '',
    },
}

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(fetchUser.pending, state => {
                state.loading = true;
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.user = action.payload.user;
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload ?? '';
                state.user = initialState.user;
            }),
})

export default userSlice.reducer;