/*
 * @Description:
 * @Author: wangdelei
 * @Date: 2021-07-13 14:53:45
 * @LastEditors: wangdelei
 * @LastEditTime: 2021-07-16 09:52:54
 */
import Layout from '@/pages/layout';
import Home from '@/pages/home';
import About from '@/pages/about';
import Login from '@/pages/login';
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
