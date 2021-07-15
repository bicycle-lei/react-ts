/*
 * @Description:
 * @Author: wangdelei
 * @Date: 2021-07-13 14:53:45
 * @LastEditors: wangdelei
 * @LastEditTime: 2021-07-14 15:31:38
 */
import Layout from './page/layout';
import Home from './page/home';
import About from './page/about';
import Login from './page/login';
const routers = [
    {   
        name: '登录',
        path: '/login',
        component: Login,
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
                name: '关于',
                path: '/about',
                component: About,
            },
        ]
    },
];
export default routers;
