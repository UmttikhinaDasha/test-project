import axios, {AxiosHeaders} from "axios";

export const API_URL = 'https://jsonplaceholder.typicode.com';

const axiosInstance = axios.create({
    baseURL: API_URL,
    timeout: 120000,
});

export default axiosInstance;