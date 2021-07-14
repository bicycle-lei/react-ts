/*
 * @Description: 
 * @Author: wangdelei
 * @Date: 2021-07-13 14:43:20
 * @LastEditors: wangdelei
 * @LastEditTime: 2021-07-14 14:47:20
 */
interface HomeProps {
    history: any
}
const Home:React.FC<HomeProps> = ({history}) => {
    console.log(history)
    return (
        <div onClick = {() => {history.push({pathname: '/about'})}}>
            我是首页
        </div>
    )
}

export default Home;