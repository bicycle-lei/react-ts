/*
 * @Description:
 * @Author: wangdelei
 * @Date: 2021-07-20 10:33:35
 * @LastEditors: wangdelei
 * @LastEditTime: 2021-07-22 20:50:37
 */
import { createStore, applyMiddleware  } from 'redux';
import thunkMiddleware from 'redux-thunk'; // 允许我们 dispatch() 函数
import storeInit from './reducers';
// import {
//     addCount,
//     minusCount,
//     getDataList
// } from './actions';

export let store = createStore(storeInit, applyMiddleware(thunkMiddleware));
// const unsubscribe = store.subscribe(() => console.log(store.getState()));
// store.dispatch(getDataList());
// store.dispatch(addCount(1));
// store.dispatch(minusCount(1));
// unsubscribe();