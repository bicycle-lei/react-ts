/*
 * @Description:
 * @Author: wangdelei
 * @Date: 2021-07-15 09:32:20
 * @LastEditors: wangdelei
 * @LastEditTime: 2021-07-15 11:31:05
 */
import axios from 'axios';
import qs from 'qs';
const baseURL = process.env.NODE_ENV === 'development' ? '/dev' : '';
const instance = axios.create({
    baseURL,
    timeout: 1000,
});
// 添加请求拦截器
instance.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {}
);

// 添加响应拦截器
instance.interceptors.response.use(
    (res) => {
        if (res.data.status !==0) {
            console.log('请求状态码错误');
        }
        return res;
    },
    (error) => {}
);
export const getApI = function (url: string) {
    instance({
        url,
        method: 'get',
    });
};
