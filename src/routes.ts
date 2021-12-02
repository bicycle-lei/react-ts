/*
 * @Description:
 * @Author: wangdelei
 * @Date: 2021-07-13 14:53:45
 * @LastEditors: wangdelei
 * @LastEditTime: 2021-12-02 10:14:40
 */
import Layout from '@/pages/layout';
import Home from '@/pages/home';
import About from '@/pages/about';
const routers = [
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
