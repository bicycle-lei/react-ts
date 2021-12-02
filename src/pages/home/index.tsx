/*
 * @Description:
 * @Author: wangdelei
 * @Date: 2021-07-13 14:43:20
 * @LastEditors: wangdelei
 * @LastEditTime: 2021-12-02 10:22:55
 */
import { Link } from '@/utils/react-router-dom';

const Home = () => {
    return (
        <div>
            <Link to='/about'>Link to About</Link>
            <div>主页</div>
        </div>
    );
};

export default Home;
