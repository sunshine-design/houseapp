import React, { Component } from "react";
import { WhiteSpace, InputItem, WingBlank, Button } from "antd-mobile";
import "./reg.css";
import { valitecode, reglist } from "../../api/api";
export default class Reg extends Component {
  constructor() {
    super();
    this.state = {
      show: "none", //提示显示隐藏
      code: "", //验证码
      codeinfo: "发送验证码", //验证码信息
      acc: "", //用户名
      pwd: "", //密码
      requcode: "", //邀请码
      oldacc: "", //旧用户名
      oldpwd: "" //旧密码
    };
  }
  render() {
    return (
      <div className="reg">
        <WhiteSpace size="xl" />
        <div className="regtitle cfff fs24 tcenter">账号注册</div>
        <WhiteSpace size="xl" />
        <WingBlank size="md">
          <InputItem
            placeholder="请输入手机号"
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
            placeholder="请输入短信验证码"
            extra={this.state.codeinfo}
            onExtraClick={this.rececode.bind(this)}
            value={this.state.code}
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
          <WhiteSpace size="sm" />
          <InputItem
            placeholder="请输入密码(最少8位，数字+字母)"
            clear
            value={this.state.pwd}
            onChange={val => {
              this.setState({ pwd: val });
            }}
            type="password"
          >
            <div
              style={{
                backgroundImage: `url(${require("../../assets/images/icon_pwd2.png")})`,
                backgroundSize: "cover",
                height: "22px",
                width: "22px"
              }}
            />
          </InputItem>
          <WhiteSpace size="sm" />
          <InputItem
            placeholder="请输入邀请码(选填)"
            clear
            value={this.state.requcode}
            onChange={val => {
              this.setState({ requcode: val });
            }}
          >
            <div
              style={{
                backgroundImage: `url(${require("../../assets/images/icon_user2.png")})`,
                backgroundSize: "cover",
                height: "22px",
                width: "22px"
              }}
            />
          </InputItem>
          <p style={{ color: "#fff", display: this.state.show }}>
            {/* 用户已存在，请直接登录 */}
            用户名或密码不能为空
          </p>
          <WhiteSpace size="xl" />
          <Button
            style={{ color: "#488CEF" }}
            onClick={this.userreg.bind(this)}
          >
            提交
          </Button>
        </WingBlank>
        <div className="protocol cfff">
          注册/登录即代表同意《房行家注册协议》
        </div>
      </div>
    );
  }
  // 获取验证码
  rececode() {
    valitecode().then(msg => {
      // console.log(msg);
      setTimeout(() => {
        this.setState({
          code: msg.data
        });
      }, 2000);
    });
    let num = 59;
    var timer = setInterval(() => {
      this.setState({ codeinfo: `验证码(${num--}秒)` });
      if (num === 0) {
        this.setState({ codeinfo: "发送验证码" });
        clearInterval(timer);
      }
    }, 1000);
  }
  // 用户注册
  userreg() {
    let { acc, pwd } = this.state;
    // 需要判定用户是否已经存在
    /* if (oldacc === acc) {
      return this.setState({ show: "block" });
    } */
    if (acc === "" && pwd === "") {
      return this.setState({ show: "block" });
    }
    this.setState({
      oldacc: acc,
      oldpwd: pwd
    });
    reglist(acc, pwd).then(msg => {
      // console.log(msg);
      if (msg.data === "ok") {
        // 用户注册成功，跳转到首页
        localStorage.setItem("username", acc);
        this.props.history.push("/");
      } else if (msg.data === "fail") {
        // 用户注册失败
      }
    });
  }
}
