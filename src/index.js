import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// 引入全局样式 Ant Design Mobile
import 'antd-mobile/dist/antd-mobile.css';  // or 'antd-mobile/dist/antd-mobile.less'
// 引入共用样式
import './assets/styles/common.css'
ReactDOM.render(<App />, document.querySelector("#root"));
// 或者在index.js中写Provider
// import {Provider} from 'react-redux'
// ReactDOM.render(<Provider><App /></Provider>, document.querySelector("#root"));
