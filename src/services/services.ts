import { IPost } from 'models/post';
import { IComment } from 'models/comment';
import { IUserResponse } from 'models/user';
import { TSort } from 'models/sort';
import { AxiosResponse } from 'axios';

import axiosInstance from './axiosInstance';

export const getPosts = (page: number, sort?: TSort, search?: string): Promise<AxiosResponse<IPost[]>> => {
    let url = `/posts?_page=${page}`;
    if (sort) {
        url += `&_sort=title&_order=${sort}`;
    }
    if (search) {
        url += `&title_like=${search}`;
    }
    return axiosInstance.get<IPost[]>(url);
};

export const getComments = (postId: number): Promise<AxiosResponse<IComment[]>> => {
    return axiosInstance.get<IComment[]>(`/comments?postId=${postId}`);
};

export const getUserData = (userId: number): Promise<AxiosResponse<IUserResponse>> => {
    return axiosInstance.get<IUserResponse>(`/users/${userId}`);
};

export const getUserPosts = (userId: number): Promise<AxiosResponse<IPost[]>> => {
    return axiosInstance.get<IPost[]>(`posts?userId=${userId}`);
};
