/*
 * @Description:
 * @Author: wangdelei
 * @Date: 2021-07-13 14:43:20
 * @LastEditors: wangdelei
 * @LastEditTime: 2021-07-23 14:05:57
 */
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { minusCount } from '@/stores/actions';
import { store } from '@/stores/index';
import {dataList } from '@/stores/actions'
import styles from './index.module.less'
interface HomeProps {
    history: any;
    dispatch: any;
    store: any;
    state: any;
}

const Home: React.FC<HomeProps> = (props) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const toAbout =  () => {
        props.history.push('/about')
    }
    const addCount = () => {
        props.dispatch({
            type: 'ADD_COUNT',
            count: 1
        })
    }
    const minuCount = (count: number) => {
        props.dispatch(minusCount(count))
    }
    const getList = () => {
        setIsLoading(true);
        // store.dispatch(getDataList())
    }
    useEffect(() => {
        setIsLoading(false);
    }, [props.state.list]);
    return (
        <div>
            <div>
                <Link to="/about" className={styles.marginLayout}>
                    <Button type="primary">Link标签跳转</Button>
                </Link>
                <Button type="primary" onClick={toAbout} >click 点击跳转</Button>
                <div className={styles.marginLayout}>
                    我是redux存储的count：{props.state.count}
                </div>
                <div>
                    <Button type="primary" onClick={addCount} className={styles.marginLayout}>conut++</Button>
                    <Button type="primary" onClick={() => {minuCount(1)}} className={styles.marginLayout}>count--</Button>
                </div>
                <div> <Button type="primary" onClick={() => {props.dispatch(dataList([{name: 'jimmy'}]))}} className={styles.marginLayout} loading={isLoading}>异步获取数据</Button> </div>
                <div>
                    {props.state.list.map((item:any, index:number) => {
                        return <div key={index} className={styles.marginLayout}>{item.name}</div>
                    })}
                </div>
            </div>
        </div>
    );
};
const mapStateToProps = (state:any) => {
    return { state };
};
const mapDispatchToProps = (dispatch: any) => {
    return { dispatch };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
