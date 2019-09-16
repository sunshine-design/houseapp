import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Flex, WhiteSpace, InputItem, WingBlank, Button } from "antd-mobile";
import "./login.css";
import { loginlist } from "../../api/api";
export default class 登录 extends Component {
  constructor() {
    super(); //拿到this
    this.state = {
      acc: "", //用户名
      pwd: "", //密码
      oldacc: "", //旧用户名
      oldpwd: "", //旧密码
      show: "none"
    };
  }
  render() {
    return (
      <div className="login">
        <WhiteSpace size="xl" />
        <Flex justify="center">
          <img src={require("../../assets/images/logo.png")} alt="logo" />
        </Flex>
        <WhiteSpace size="xl" />
        <WingBlank size="md">
          <InputItem
            placeholder="请输入账号"
            clear
            value={this.state.acc}
            onChange={val => {
              this.setState({ acc: val });
            }}
          >
            <div
              style={{
                backgroundImage: `url(${require("../../assets/images/icon_user.png")})`,
                backgroundSize: "cover",
                height: "22px",
                width: "22px"
              }}
            />
          </InputItem>
          <WhiteSpace size="sm" />
          <InputItem
            placeholder="请输入密码"
            clear
            value={this.state.pwd}
            onChange={val => {
              this.setState({ pwd: val });
            }}
            type="password"
          >
            <div
              style={{
                backgroundImage: `url(${require("../../assets/images/icon_pwd.png")})`,
                backgroundSize: "cover",
                height: "22px",
                width: "22px"
              }}
            />
          </InputItem>
          <p style={{ color: "#fff", display: this.state.show }}>
            用户名或密码错误
          </p>
          <WhiteSpace size="xl" />
          <Button
            style={{ color: "#488CEF" }}
            onClick={this.userlogin.bind(this)}
          >
            登录
          </Button>
          <WhiteSpace size="sm" />
          <Flex justify="between">
            <Link to="/reg" className="cfff">
              忘记密码?
            </Link>
            <Link to="/reg" className="cfff">
              注册&gt;&gt;
            </Link>
          </Flex>
        </WingBlank>
        <div className="protocol cfff">
          注册/登录即代表同意《房行家注册协议》
        </div>
      </div>
    );
  }
  userlogin() {
    let { acc, pwd, oldacc, oldpwd } = this.state;
    // 如果用户名和密码都相等，则return ；否则将新用户名密码保存到旧用户名密码中
    if (oldacc === acc && oldpwd === pwd) return;
    loginlist(acc, pwd).then(msg => {
      this.setState({
        oldacc: acc,
        oldpwd: pwd
      });
      console.log(msg);
      // 如果登录成功跳转到首页，否则提示
      if (msg.data === "ok") {
        // 成功并且跳转
        this.props.history.push("/");
        // 把用户名存储在本地，用于判断用户是否登录
        localStorage.setItem("username", acc);
      } else if (msg.data === "fail") {
        // 失败信息提示
        this.setState({
          show: "block"
        });
      }
    });
  }
}
