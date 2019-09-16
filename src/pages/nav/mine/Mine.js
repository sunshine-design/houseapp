import React, { Component } from "react";
import { WingBlank, Flex, List, WhiteSpace } from "antd-mobile";
import "./mine.css";
const Item = List.Item;
export default class Mine extends Component {
  constructor() {
    super();
    this.state = {
      name: "登录/注册",
      total: [
        { num: 0, icon: "wallet.png", text: "钱包" },
        { num: 0, icon: "discounts.png", text: "优惠" },
        { num: 0, icon: "integral.png", text: "积分" }
      ],
      minelist: [
        { icon: "icon_integra.png", text: "我的积分" },
        { icon: "icon_Subscribe.png", text: "我的订阅" },
        { icon: "icon_contacts.png", text: "微聊联系人" },
        {}, //中间空白间距
        { icon: "icon_Calculator_main.png", text: "房贷计算器" },
        { icon: "icon_star.png", text: "我的房子" },
        {},
        { icon: "icon_history.png", text: "我的看房记录" },
        { icon: "icon_my.png", text: "我的问答" },
        {},
        { icon: "icon_set.png", text: "设置" },
        { icon: "icon_feedback.png", text: "意见反馈" }
      ]
    };
  }
  render() {
    return (
      <div className="mine">
        <WingBlank size="md">
          <Flex style={{ paddingTop: "10px" }}>
            <img
              src={require("../../../assets/images/logo.png")}
              alt=""
              style={{ width: "40px", height: "40px" }}
            />
            <h3
              style={{ color: "#fff", margin: "0 100px 0px 30px" }}
              onClick={this.clicklogin.bind(this)}
            >
              {this.state.name}
            </h3>
            <img
              src={require("../../../assets/images/exit.png")}
              alt=""
              style={{ width: "20px", height: "20px" }}
              onClick={this.exit.bind(this)}
            />
          </Flex>
          <Flex justify="between" className="minetitle">
            {this.state.total.map(obj => (
              <div
                key={obj.text}
                style={{
                  color: "#fff",
                  padding: "0px 20px"
                }}
              >
                <p style={{ textAlign: "center" }}>{obj.num}</p>
                <Flex justify="between">
                  <img
                    src={require("../../../assets/images/" + obj.icon)}
                    alt=""
                    style={{
                      width: "20px",
                      height: "20px",
                      marginRight: "10px"
                    }}
                  />
                  <span>{obj.text}</span>
                </Flex>
              </div>
            ))}
          </Flex>
          <WhiteSpace size="lg" />
        </WingBlank>
        <div style={{ backgroundColor: "#fff" }}>
          <List>
            {this.state.minelist.map(obj => {
              // 判断
              if (obj.icon) {
                return (
                  <Item
                    thumb={require("../../../assets/images/" + obj.icon)}
                    arrow="horizontal"
                    onClick={() => {}}
                    key={obj.text}
                  >
                    {obj.text}
                  </Item>
                );
              } else {
                return (
                  <div
                    style={{ height: "8px", backgroundColor: "#F5F5F9" }}
                  ></div>
                );
              }
            })}
          </List>
        </div>
      </div>
    );
  }
  componentDidMount() {
    let val = localStorage.getItem("username");
    this.setState({ name: val ? val : "登录/注册" });
    /*   if (localStorage.getItem("username")) {
      // 登录成功
      this.setState({ name: localStorage.getItem("username") });
    } else {
      // 未登录
      this.setState({ name: "登录/注册" });
    } */
  }
  clicklogin() {
    if (!localStorage.getItem("username")) {
      // 未登录，跳转到登录页面
      console.log(this.props.changepath.push("/login"));
    }
  }
  exit() {
    // 移除localStorage上的用户名
    localStorage.removeItem("username");
    this.setState({ name: "登录/注册" });
  }
}
