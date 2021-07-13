/*
 * @Description:
 * @Author: wangdelei
 * @Date: 2021-07-13 14:53:45
 * @LastEditors: wangdelei
 * @LastEditTime: 2021-07-13 20:25:21
 */
import Layout from './page/layout';
import Home from './page/home';
import About from './page/about';
const routers = [
    {
        path: '/ab',
        component: About,
        childRoutes: []
    },
    {
        path: '/',
        component: Layout,
        childRoutes: [
            {
                path: '/',
                exact: true,
                component: Home,
            },
            {
                name: '首页',
                path: '/home',
                component: Home,
            },
            {
                name: '主要',
                path: '/home/index',
                component: About,
            },
            {   
                name: '关于',
                path: '/about',
                component: About,
            },
        ]
    },
];
export default routers;
