/*
 * @Description: 
 * @Author: wangdelei
 * @Date: 2021-07-07 13:59:31
 * @LastEditors: wangdelei
 * @LastEditTime: 2021-07-20 11:23:32
 */
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './index.less';
import App from './App';
import {store} from './stores';
import reportWebVitals from './reportWebVitals';
ReactDOM.render(
  <React.StrictMode>
      <Provider store = {store}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
