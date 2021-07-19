/*
 * @Description:
 * @Author: wangdelei
 * @Date: 2021-07-13 14:58:17
 * @LastEditors: wangdelei
 * @LastEditTime: 2021-07-19 13:43:48
 */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout as Lay, Menu } from 'antd';

import styles from './index.module.less';
import routes from '../../routes';
const { Header, Content, Footer } = Lay;

interface LayoutProps {}
const Layout: React.FC<LayoutProps> = (props) => {
    const navList = routes[routes.length - 1].childRoutes.filter(
        (item) => item.name
    );
    const { pathname } = window.location;
    var defaultKey: string = '1';
    navList.some((item, index) => {
        if (pathname === item.path) {
            defaultKey = String(index + 1);
            return true;
        }
    });
    return (
        <>
            <Lay className="layout">
                <Header>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={[defaultKey]}
                    >
                        {navList.map((nav, index) => {
                            const key = index + 1;
                            return (
                                <Menu.Item key={key}>
                                    <Link to={nav.path}>{nav.name}</Link>
                                </Menu.Item>
                            );
                        })}
                    </Menu>
                </Header>
                <Content className={styles.LayoutContent}>
                    <div className={styles.siteLayoutContent}>
                        {props.children}
                    </div>
                </Content>
                <Footer className={styles.layoutFooter}>
                    Ant Design ©2018 Created by Ant UED
                </Footer>
            </Lay>
        </>
    );
};
export default Layout;
