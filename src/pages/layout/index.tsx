/*
 * @Description:
 * @Author: wangdelei
 * @Date: 2021-07-13 14:58:17
 * @LastEditors: wangdelei
 * @LastEditTime: 2021-12-02 10:20:45
 */
interface LayoutProps {}
const Layout: React.FC<LayoutProps> = (props) => {
    return (
        <>
            {props.children}
        </>
    );
};
export default Layout;
