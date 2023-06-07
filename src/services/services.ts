import axiosInstance from "./axiosInstance";
import {IPost} from "../models/post";


export const getPosts = (page: number) => {
    return axiosInstance.get<IPost[]>(`/posts?_page=${page}`)
}