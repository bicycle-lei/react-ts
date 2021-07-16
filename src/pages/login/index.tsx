/*
 * @Description:
 * @Author: wangdelei
 * @Date: 2021-07-13 14:47:58
 * @LastEditors: wangdelei
 * @LastEditTime: 2021-07-14 16:07:51
 */
import { Link } from 'react-router-dom';
import styles from './index.module.less';
function Login() {
    return (
        <div className={styles.login}>
            <Link to="/home" className={styles.loginBtn}>Login</Link>
        </div>
    )
}

export default Login;
