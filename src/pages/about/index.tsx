/*
 * @Description:
 * @Author: wangdelei
 * @Date: 2021-07-13 14:47:58
 * @LastEditors: wangdelei
 * @LastEditTime: 2021-07-23 11:18:44
 */
// import { Link } from 'react-router-dom';
// import { useParams } from 'react-router-dom'; // 获取路由参数
import { store } from '@/stores/index';
import { Button } from 'antd';
function About() {
    // const { id } = useParams();
    return (
        <div>
            <div>关于页</div>
            <Button
                type="primary"
                onClick={() => {
                    store.dispatch({
                        type: 'ADD_COUNT',
                        count: 1,
                    });
                }}
            >
                conut++
            </Button>
        </div>
    );
}

export default About;
