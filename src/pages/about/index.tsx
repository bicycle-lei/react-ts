/*
 * @Description:
 * @Author: wangdelei
 * @Date: 2021-07-13 14:47:58
 * @LastEditors: wangdelei
 * @LastEditTime: 2021-12-02 14:23:28
 */
import { Link } from '@/utils/react-router-dom';
function About() {
    return (
        <div>
            <div>关于</div>
            <Link to='/home'>Link to Home</Link>
        </div>
    );
}

export default About;
