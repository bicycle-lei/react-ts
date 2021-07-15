/*
 * @Description:
 * @Author: wangdelei
 * @Date: 2021-07-13 14:43:20
 * @LastEditors: wangdelei
 * @LastEditTime: 2021-07-15 10:14:47
 */
import { useEffect } from 'react';
import { getApI } from '../../utils/request';
interface HomeProps {
    history: any;
}
const Home: React.FC<HomeProps> = ({ history }) => {
    useEffect(() => {
        getApI('/gtm/api/report/synthesizeExamResult?bmid=29732');
    }, [])
    return (
        <div
            onClick={() => {
                history.push({ pathname: '/about' });
            }}
        >
            我是首页
        </div>
    );
};

export default Home;
