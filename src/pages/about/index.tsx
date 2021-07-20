/*
 * @Description:
 * @Author: wangdelei
 * @Date: 2021-07-13 14:47:58
 * @LastEditors: wangdelei
 * @LastEditTime: 2021-07-20 14:37:59
 */
import { Link } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
function About() {
    // const { id } = useParams();
    return (
        <div>
            关于页内容
            <Link to="/home"></Link>
        </div>
    );
}

export default About;
