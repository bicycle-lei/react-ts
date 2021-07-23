/*
 * @Description:
 * @Author: wangdelei
 * @Date: 2021-07-13 14:43:20
 * @LastEditors: wangdelei
 * @LastEditTime: 2021-07-23 11:07:56
 */
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { minusCount, getDataList } from '@/stores/actions';
import { store } from '@/stores/index';
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
        store.dispatch(getDataList())
    }
    useEffect(() => {
        setIsLoading(false);
    }, [props.state.list]);
    return (
        <div>
            <div>
                <Link to="/about" style={{marginRight: '20px'}}>
                    <Button type="primary">Link标签跳转</Button>
                </Link>
                <Button type="primary" onClick={toAbout} >click 点击跳转</Button>
                <div style={{margin: '20px'}}>
                    我是redux存储的count：{props.state.count}
                </div>
                <div>
                    <Button type="primary" onClick={addCount} style={{marginRight: '20px'}}>conut++</Button>
                    <Button type="primary" onClick={() => {minuCount(1)}}>count--</Button>
                </div>
                <div> <Button type="primary" onClick={() => {getList()}} style={{margin: '20px'}} loading={isLoading}>异步获取数据</Button> </div>
                <div>
                    {props.state.list.map((item:any, index:number) => {
                        return <div key={index}>{item.name}</div>
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
