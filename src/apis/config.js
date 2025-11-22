import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/products',
    headers: {
        'Accept-Language': 'ar'
    }
})

export default axiosInstance;