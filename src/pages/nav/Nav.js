import React, { Component } from "react";
import { TabBar } from "antd-mobile";
import "./nav.css";
import Main from "./main/Main";
import History from "./history/History";
import Resource from "./resource/Resource";
import Chat from "./chat/Chat";
import Mine from "./mine/Mine";

export default class Nav extends Component {
  constructor() {
    super();
    this.state = {
      selectedTab: "main",
      tabbarList: [
        {
          title: "首页",
          key: "main",
          icon: "icon_main1.png",
          selectedIcon: "icon_main2.png"
        },
        {
          title: "足迹",
          key: "history",
          icon: "icon_history1.png",
          selectedIcon: "icon_history2.png"
        },
        {
          title: "房源",
          key: "resource",
          icon: "icon_resource1.png",
          selectedIcon: "icon_resource2.png"
        },
        {
          title: "消息",
          key: "chat",
          icon: "icon_chat1.png",
          selectedIcon: "icon_chat2.png"
        },
        {
          title: "我的",
          key: "mine",
          icon: "icon_mine1.png",
          selectedIcon: "icon_mine2.png"
        }
      ]
    };
  }

  render() {
    return (
      <div style={{ position: "fixed", height: "100%", width: "100%", top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          {this.state.tabbarList.map(obj => (
            <TabBar.Item
              title={obj.title}
              key={obj.key}
              icon={
                <div
                  style={{
                    width: "22px",
                    height: "22px",
                    background: `url(${require("../../assets/images/" +
                      obj.icon)}) center center /  21px 21px no-repeat`
                  }}
                />
              }
              selectedIcon={
                <div
                  style={{
                    width: "22px",
                    height: "22px",
                    background: `url(${require("../../assets/images/" +
                      obj.selectedIcon)}) center center /  21px 21px no-repeat`
                  }}
                />
              }
              selected={this.state.selectedTab === obj.key}
              // badge={1}
              onPress={() => {
                this.setState({
                  selectedTab: obj.key
                });
              }}
            >
              {this.renderContent()}
            </TabBar.Item>
          ))}
        </TabBar>
      </div>
    );
  }

  renderContent() {
    // console.log(this.props.history.push)
    switch (this.state.selectedTab) {
      case "main":
        return <Main changepath={this.props.history} />;
      case "history":
        return <History />;
      case "resource":
        return <Resource />;
      case "chat":
        return <Chat />;
      case "mine":
        return <Mine changepath={this.props.history} />;
    }
  }
}
