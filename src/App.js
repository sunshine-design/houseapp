import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import Nav from "./pages/nav/Nav"; //导航
import Login from "./pages/login/Login"; //登录
import Reg from "./pages/reg/Reg"; //注册
import City from "./pages/city/City"; //城市
import Search from "./pages/search/Search"; //查询
import Map from "./pages/map/Map"; //地图
import Error404 from "./pages/error404/Error404";
export default class App extends Component {
  // console.log(store.getState());
  render() {
    return (
      // Provider 数据容器
      <Provider store={store}>
        <div className="app_css">
          <HashRouter>
            <Switch>
              {/* exact 精准匹配 */}
              <Route path="/" exact component={Nav} />
              <Route path="/login" component={Login} />
              <Route path="/reg" component={Reg} />
              <Route path="/city" component={City} />
              <Route path="/search" component={Search} />
              <Route path="/map" component={Map} />
              {/* 没有path的是默认页面 容错处理 */}
              <Route component={Error404} />
              {/* <Route component={Nav}/> */}
            </Switch>
          </HashRouter>
        </div>
      </Provider>
    );
  }
}
