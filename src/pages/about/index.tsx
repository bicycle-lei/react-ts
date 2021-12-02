/*
 * @Description:
 * @Author: wangdelei
 * @Date: 2021-07-13 14:47:58
 * @LastEditors: wangdelei
 * @LastEditTime: 2021-12-02 10:24:03
 */
import { Link } from '@/utils/react-router-dom';
function About() {
    return (
        <div>
            <Link to='/home'>Link to Home</Link>
            <div>关于</div>
        </div>
    );
}

export default About;
