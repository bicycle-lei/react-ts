/*
 * @Description: 
 * @Author: wangdelei
 * @Date: 2021-07-07 13:59:31
 * @LastEditors: wangdelei
 * @LastEditTime: 2021-07-07 16:20:18
 */
import logo from './logo.svg';
import styles from './App.module.less';
import { Button } from 'antd';

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <img src={logo} className={styles.AppLogo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button type="primary">测试按钮</Button>  
      </header>
    </div>
  );
}

export default App;
