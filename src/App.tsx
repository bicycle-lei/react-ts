/*
 * @Description:
 * @Author: wangdelei
 * @Date: 2021-07-07 13:59:31
 * @LastEditors: wangdelei
 * @LastEditTime: 2021-07-13 20:25:59
 */
import routes from './routes';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
function App() {
    return (
        <BrowserRouter>
            <Switch>
                {routes.map((item) => {
                    const { path, childRoutes } = item;
                    return childRoutes.length ? (
                        <Route
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
