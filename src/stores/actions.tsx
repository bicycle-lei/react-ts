/*
 * @Description:
 * @Author: wangdelei
 * @Date: 2021-07-20 09:52:28
 * @LastEditors: wangdelei
 * @LastEditTime: 2021-07-23 13:58:38
 */
// import types from './actionTypes';
/*
 * action 类型
 */
import { MINUS_COUNT, ADD_COUNT, DATA_LIST } from './actionTypes';
import { getlist } from '@/services/api';
/*
 * action 创建函数
 */

export function addCount(count: number) {
    return { type: ADD_COUNT, count };
}

export function minusCount(count: number) {
    return { type: MINUS_COUNT, count };
}

export function dataList(list: any= []) {
    console.log('action')
    return { type: DATA_LIST, list };
}

// export function getDataList() {
//     return function (dispatch:any) {
//         getlist().then((res:any) => {
//             dispatch(dataList(res.result));
//         });
//     }
// }
