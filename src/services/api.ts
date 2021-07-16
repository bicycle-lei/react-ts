/*
 * @Description: 请求
 * @Author: wangdelei
 * @Date: 2021-07-15 14:16:05
 * @LastEditors: wangdelei
 * @LastEditTime: 2021-07-16 09:31:37
 */
import { instanceGet, instancePost } from '@/utils/request';

export const getlist = () => {
    return instanceGet('/gtm/api/report/synthesizeExamResult?bmid=29732',{},{
        
    });
};
export const getDetail = () => {
    return instanceGet('/agencysvc/postList/tree?name=',{},{
       
    });
};
export const setList = (params:object) => {
    return instancePost('/agencysvc/postList', params);
};