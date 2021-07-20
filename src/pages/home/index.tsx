/*
 * @Description:
 * @Author: wangdelei
 * @Date: 2021-07-13 14:43:20
 * @LastEditors: wangdelei
 * @LastEditTime: 2021-07-20 14:37:23
 */
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getlist, setList, getDetail } from '@/services/api';
interface HomeProps {
    history: any;
}
const Home: React.FC<HomeProps> = (props) => {
    const getData = async () => {
        const res = await getlist();
        console.log(res);
        const res1 = await getDetail();
        console.log(res1);
    };
    useEffect(() => {
        getData();
    }, []);
    useEffect(() => {
    }, []);
    return (
        <div
            onClick={() => {
                setList({ name: 'ceshi', parentId: 23, postType: 'group' });
                // history.push({ pathname: '/about' });
            }}
        >
            首页内容
        </div>
    );
};
const mapStateToProps = (state: any) => {
    return {
        state,
    };
};
export default connect(mapStateToProps)(Home);
