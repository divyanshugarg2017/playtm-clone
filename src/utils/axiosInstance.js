import axios from 'axios';
import { apiMock } from '../mock';
const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080/PVUser/',
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
        // withCredentials: true,
    },
});

// apiMock(axiosInstance, { delayResponse: 2000 });
export default axiosInstance;
