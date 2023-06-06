import axiosInstance from "./axiosInstance";
import {IPost} from "../models/post";


export const getPosts = () => {
    return axiosInstance.get<IPost[]>('/posts')
}