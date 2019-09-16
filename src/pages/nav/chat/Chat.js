import React, { Component } from "react";
import { Flex, WingBlank, Button } from "antd-mobile";
export default class Chat extends Component {
  render() {
    return (
      <WingBlank size="md">
        <Flex direction="column" style={{ marginTop: "20px" }}>
          <img
            src={require("../../../assets/images/logo.png")}
            alt=""
            style={{ width: "40px", height: "40px" }}
          />
          <p>
            置业顾问：<label style={{ color: "#488CEF" }}>张小妹</label>
          </p>
          <p>专业服务诚信做人诚心做事！</p>
          <Button type="primary" size="small">
            我要聊天
          </Button>
        </Flex>
      </WingBlank>
    );
  }
}
