/*
 * @Description:
 * @Author: wangdelei
 * @Date: 2021-07-20 10:40:13
 * @LastEditors: wangdelei
 * @LastEditTime: 2021-07-22 20:19:06
 */
import { combineReducers } from 'redux';

import { ADD_COUNT, MINUS_COUNT, DATA_LIST } from './actionTypes';
/**
 * @description: 存储count到store
 * @param {*} state store对象中的count
 * @param {any} action action
 * @return {*} 返回新的 count
 */
function count(state = 0, action: any) {
    const newCount = action.count || 0;
    switch (action.type) {
        case ADD_COUNT:
            return state + newCount;
        case MINUS_COUNT:
            return state - newCount;
        default:
            return state;
    }
}
/**
 * @description: 存储list到store
 * @param {*} state
 * @param {any} action
 * @return {*} 返回新的list
 */
function list(state = [], action: any) {
    const newList = action.list || [];
    switch (action.type) {
        case DATA_LIST:
            return [...state, ...newList];
        default:
            return state;
    }
}
// 可以将多个redux合并为一个导出
const storeInit = combineReducers({
    count,
    list,
});

export default storeInit;
