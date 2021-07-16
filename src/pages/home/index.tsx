/*
 * @Description:
 * @Author: wangdelei
 * @Date: 2021-07-13 14:43:20
 * @LastEditors: wangdelei
 * @LastEditTime: 2021-07-16 09:25:21
 */
import { useEffect } from 'react';
import { getlist, setList, getDetail } from '@/services/api';
interface HomeProps {
    history: any;
}
const Home: React.FC<HomeProps> = ({ history }) => {
    const getData = async () => {
        const res =await getlist();
        const res1 =await getDetail();
    }
    useEffect( () => {
        getData();
    }, [])
    return (
        <div
            onClick={() => {
                setList({name: "ceshi",
                parentId: 23,
                postType: "group"})
                // history.push({ pathname: '/about' });
            }}
        >
            我是首页
        </div>
    );
};

export default Home;
