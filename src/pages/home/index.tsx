/*
 * @Description:
 * @Author: wangdelei
 * @Date: 2021-07-13 14:43:20
 * @LastEditors: wangdelei
 * @LastEditTime: 2021-12-02 14:22:32
 */
import { Link, NavLink } from '@/utils/react-router-dom';

const Home = () => {
    return (
        <div>
            主页
            <div>
                <Link to="/about">Link to About</Link>
            </div>
            <div>
                <NavLink to="/about" target="_blank" activeStyle={{color: 'red'}} isActive={() => true}>NavLink to About</NavLink>
            </div>
            <h3>Link</h3>
            {/* <div>
                props:
                to跳转链接的路径、query已经转化成字符串的键值对的对象、state保存在
                location 中的 state、activeClassName、activeStyle、onClick(e)
            </div> */}
        </div>
    );
};

export default Home;
