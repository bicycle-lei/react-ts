/*
 * @Description:
 * @Author: wangdelei
 * @Date: 2021-07-07 13:59:31
 * @LastEditors: wangdelei
 * @LastEditTime: 2021-12-02 14:32:12
 */
import routes from './routes';
// Link
import { BrowserRouter, Switch, Route } from '@/utils/react-router-dom';
function App() {
    return (
        <BrowserRouter a='1'>
            <Switch>
                {routes.map((item) => {
                    const { path, childRoutes } = item;
                    return childRoutes.length ? (
                        <Route
                            // exact
                            path={path}
                            key={path}
                            render={() => (
                                <item.component>
                                    {childRoutes.map((route, i) => {
                                        return <Route {...route} key={i} />;
                                    })}
                                </item.component>
                            )}
                        />
                    ) : (
                        <Route {...item} key={path} />
                    );
                })}
            </Switch>
        </BrowserRouter>
    );
}

export default App;
