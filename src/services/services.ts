import axiosInstance from "./axiosInstance";
import {IPost} from "models/post";
import {IComment} from "models/comment";


export const getPosts = (page: number) => {
    return axiosInstance.get<IPost[]>(`/posts?_page=${page}`)
}

export const getComments = (postId: number) => {
    return axiosInstance.get<IComment[]>(`/comments?postId=${postId}`)
}