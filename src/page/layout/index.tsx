/*
 * @Description:
 * @Author: wangdelei
 * @Date: 2021-07-13 14:58:17
 * @LastEditors: wangdelei
 * @LastEditTime: 2021-07-14 14:46:20
 */
interface LayoutProps {}
// props.history.push({pathname: '/'})
const Layout: React.FC<LayoutProps> = ({ children }) => {
    return <>{children}</>;
};
export default Layout;
