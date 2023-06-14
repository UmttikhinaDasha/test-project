import axiosInstance from "./axiosInstance";
import {IPost} from "models/post";
import {IComment} from "models/comment";
import {IUserResponse} from "models/user";
import {TSort} from "models/sort";


export const getPosts = (page: number, sort?: TSort, search?: string) => {
    let url = `/posts?_page=${page}`;
    if (sort) {
        url = url + `&_sort=title&_order=${sort}`
    }
    if (search) {
        url = url + `&title_like=${search}`
    }
    return axiosInstance.get<IPost[]>(url);
}

export const getComments = (postId: number) => {
    return axiosInstance.get<IComment[]>(`/comments?postId=${postId}`)
}

export const getUserData = (userId: number) => {
    return axiosInstance.get<IUserResponse>(`/users/${userId}`)
}

export const getUserPosts = (userId: number) => {
    return axiosInstance.get<IPost[]>(`posts?userId=${userId}`)
}