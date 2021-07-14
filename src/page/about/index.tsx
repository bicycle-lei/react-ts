/*
 * @Description:
 * @Author: wangdelei
 * @Date: 2021-07-13 14:47:58
 * @LastEditors: wangdelei
 * @LastEditTime: 2021-07-14 15:09:34
 */
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
function About() {
    const { id } = useParams();
    console.log(id);
    return <Link to="/home">我是关于</Link>;
}

export default About;
