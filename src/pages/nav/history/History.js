import React, { Component } from "react";
import { connect } from "react-redux";
import { Flex, WingBlank } from "antd-mobile";
import { ip } from "../../../api/api";
class History extends Component {
  constructor() {
    super();
    this.state = {
      show: "block"
    };
  }
  render() {
    console.log(this.props.historyArr);
    return (
      <div>
        <WingBlank size="md">
          <p
            style={{
              display: this.state.show
            }}
          >
            还没有浏览过房源,快去关注你的房源哦!!
          </p>
          {this.props.historyArr.map(obj => (
            <Flex key={obj.id} justify="between">
              <img alt="" src={ip + obj.imgs} style={{ width: "30%" }} />
              <div>
                <p>{obj.name}</p>
                <p>
                  <span style={{ display: "inline-block", marginRight: "5px" }}>
                    {obj.area}
                  </span>
                  <span>{obj.range}</span>{" "}
                </p>
                <p>
                  <span style={{ display: "inline-block", marginRight: "5px" }}>
                    {obj.type}
                  </span>
                  <span>{obj.point}平</span>
                </p>
              </div>
              <div style={{ color: "#E1251B" }}>{obj.price}/平</div>
            </Flex>
          ))}
        </WingBlank>
      </div>
    );
  }
  // 根据是否浏览过房源切换内容
  componentDidMount() {
    this.setState({
      show: this.props.historyArr.length > 0 ? "none" : "block"
    });
  }
}

// export default connect()(History);  //只传递dispatch

export default connect(state => {
  return { test: state.test, historyArr: state.historyArr };
})(History); // 传递dispatch和state
