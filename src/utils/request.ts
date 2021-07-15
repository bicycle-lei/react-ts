/*
 * @Description:
 * @Author: wangdelei
 * @Date: 2021-07-15 09:32:20
 * @LastEditors: wangdelei
 * @LastEditTime: 2021-07-15 15:54:01
 */
import axios from 'axios';

const baseURL =
    process.env.NODE_ENV === 'development'
        ? '/dev'
        : 'https://t-mgateway.gaodunwangxiao.com';
const instance = axios.create({
    baseURL,
    timeout: 1000,
    headers: {
        Authorization: '',
    },
});
// 添加请求拦截器
instance.interceptors.request.use(
    (config) => {
        config.headers.Authorization = localStorage.getItem('Token') || '';
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// 添加响应拦截器
instance.interceptors.response.use(
    (res) => {
        const token = 'Bearer eyJhZ2VuY3kiOjI4OCwiYWxnIjoiSFMyNTYifQ.eyJqdGkiOiJHYW9kdW4iLCJpYXQiOjE2MjM3NDcyMDMsInN1YiI6Ijg3MjAxNyIsImlzcyI6Ikdhb2R1biIsImV4cCI6MTYyNjMzOTIwM30.Us1upSPR4y3EWwvA6qffGVq4EHk-4qdnxaUY0JQtmoQ'
        localStorage.setItem('Token', token)
        return res.data;
    },
    (error) => {
        return Promise.reject(error);
    }
);

/**
 * @description:实例化get请求
 * @param {string} url
 * @param {object} params
 * @return {*}
 */
export const instanceGet = function (
    url: string,
    params?: object,
    options?: object
) {
    return instance({
        url,
        params,
        ...options,
        method: 'get',
    });
};

/**
 * @description:实例化post请求
 * @param {string} url
 * @param {object} data
 * @return {*}
 */
export const instancePost = function (
    url: string,
    data?: object,
    options?: object
) {
    return instance({
        url,
        data,
        ...options,
        method: 'post',
    });
};
