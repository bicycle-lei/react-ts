/*
 * @Description:
 * @Author: wangdelei
 * @Date: 2021-07-13 14:47:58
 * @LastEditors: wangdelei
 * @LastEditTime: 2021-07-23 11:23:22
 */
// import { Link } from 'react-router-dom';
// import { useParams } from 'react-router-dom'; // 获取路由参数
import { useState } from 'react';
import { store } from '@/stores/index';
import { Button } from 'antd';
function About() {
    // const { id } = useParams();
    const [count, setCount] = useState<Number>(store.getState().count);
    return (
        <div>
            <div>我是redux存储的count：{count}</div>
            <Button
                type="primary"
                onClick={() => {
                    store.dispatch({
                        type: 'ADD_COUNT',
                        count: 1,
                    });
                    setCount(store.getState().count);
                }}
            >
                conut++
            </Button>
        </div>
    );
}

export default About;
