/*
 * @Description:
 * @Author: wangdelei
 * @Date: 2021-07-20 10:33:35
 * @LastEditors: wangdelei
 * @LastEditTime: 2021-07-20 11:17:51
 */
import { createStore } from 'redux';
import todoApp from './reducers';

export let store = createStore(todoApp);
