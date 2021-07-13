/*
 * @Description:
 * @Author: wangdelei
 * @Date: 2021-07-13 14:47:58
 * @LastEditors: wangdelei
 * @LastEditTime: 2021-07-13 18:48:48
 */
import { useParams } from 'react-router-dom';
function About() {
    const { id } = useParams();
    console.log(id);
    return <div>我是关于</div>;
}

export default About;
