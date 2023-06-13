import {combineReducers, configureStore} from "@reduxjs/toolkit";
import postsReducer from "./reducers/postsSlice";
import commentsReducer from "./reducers/commentsSlice";
import userReducer from  "./reducers/userSlice"

const rootReducer = combineReducers({
    postsReducer,
    commentsReducer,
    userReducer,
});


export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];