/*
 * @Description:
 * @Author: wangdelei
 * @Date: 2021-07-15 09:32:20
 * @LastEditors: wangdelei
 * @LastEditTime: 2021-07-16 11:35:54
 */
import axios from 'axios';

const NODE_ENV = process.env.NODE_ENV;
var baseURL = '';
/**
 * @description: 开发环境下设置代理请求环境
 * @param {*}
 * @return {*}
 */
const devServerEnv = () => {
    const serverEnv = process.env.REACT_APP_SECRET_SERVICE_ENV; //自定义环境变量 对应本地代理 默认值test
    serverEnv === 'test' ? (baseURL = '/dev') : (baseURL = '/prod');
};
switch (NODE_ENV) {
    case 'development': // 开发环境
        devServerEnv();
        break;
    case 'test': // 测试环境
        baseURL = 'https://t-mgateway.gaodunwangxiao.com';
        break;
    case 'production': // 正式环境
        baseURL = 'https://mgateway.gaodunwangxiao.com';
        break;
}

const instance = axios.create({
    baseURL,
    timeout: 10000,
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
        const token =
            'Bearer eyJhZ2VuY3kiOjI4OCwiYWxnIjoiSFMyNTYifQ.eyJqdGkiOiJHYW9kdW4iLCJpYXQiOjE2MjM3NDcyMDMsInN1YiI6Ijg3MjAxNyIsImlzcyI6Ikdhb2R1biIsImV4cCI6MTYyNjMzOTIwM30.Us1upSPR4y3EWwvA6qffGVq4EHk-4qdnxaUY0JQtmoQ';
        localStorage.setItem('Token', token);
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
