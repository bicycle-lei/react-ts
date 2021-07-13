/*
 * @Description:
 * @Author: wangdelei
 * @Date: 2021-07-07 13:59:31
 * @LastEditors: wangdelei
 * @LastEditTime: 2021-07-13 11:11:45
 */
import styles from './App.module.less';
// import { Button } from 'antd';
import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

function App() {
    return (
        <div className={styles.App}>
            <BrowserRouter>
                <div>我是最外层</div>
                <Switch>
                    <Route exact path="/">
                        我是首页
                    </Route>
                    <Route path="/about">
                        <Link to="/">我是关于</Link>
                    </Route>
                    <Route path="/dashboard">我是黑板</Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
