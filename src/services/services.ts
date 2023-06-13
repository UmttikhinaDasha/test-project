import axiosInstance from "./axiosInstance";
import {IPost} from "models/post";
import {IComment} from "models/comment";
import {IUserResponse} from "models/user";



export const getPosts = (page: number) => {
    return axiosInstance.get<IPost[]>(`/posts?_page=${page}`)
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