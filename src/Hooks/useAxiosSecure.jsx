import axios from "axios";

const axiossecure = axios.create({
    baseURL: 'http://localhost:5000'
});

const useAxiosSecure = () => {
    // Add a request interceptor
    axiossecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        config.headers.authorization = `Bearer ${token}`
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });

    // Add a response interceptor
    axiossecure.interceptors.response.use(function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    }, function (error) {
        const status =error.response.status;
        return Promise.reject(error);
    });
    return axiossecure;
};

export default useAxiosSecure;