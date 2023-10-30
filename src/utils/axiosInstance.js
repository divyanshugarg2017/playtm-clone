import axios from 'axios';
import { apiMock } from '../mock';
const axiosInstance = axios.create({ 
    baseURL: 'http://playersvictory.in:8082/PVUser/',
    withCredentials: true, 
});

// apiMock(axiosInstance, { delayResponse: 2000 });
export default axiosInstance;
