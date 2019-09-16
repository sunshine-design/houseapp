import React, { Component } from "react";
import citydata from "../../json/city.json";
import BScroll from "better-scroll";
export default class City extends Component {
  render() {
    return (
      <div style={{ height: "100%" }}>
        <div id="selectedcity" style={{ height: "100%" }}>
          <ul className="content" style={{ padding: 0 }}>
            {/* 热门城市 */}
            <h2 style={{ padding: "0 20px" }}>热门城市</h2>
            <div style={{ backgroundColor: "#fff", padding: "0 20px" }}>
              {citydata.hotcity.map(name => (
                <p
                  style={{
                    borderBottom: "1px solid #F5F5F9",
                    lineHeight: "50px",
                    margin: 0
                  }}
                >
                  {name}
                </p>
              ))}
            </div>
            {/* 所有城市 */}
            {citydata.citys.map(obj => (
              <div id={obj.title}>
                <h3 style={{ padding: "0 20px" }}>{obj.title}</h3>
                <div style={{ backgroundColor: "#fff", padding: "0 20px" }}>
                  {obj.lists.map(name => (
                    <p
                      style={{
                        borderBottom: "1px solid #F5F5F9",
                        lineHeight: "50px",
                        margin: 0
                      }}
                    >
                      {name}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </ul>
        </div>
        {/* 右侧选项 */}
        <div
          style={{
            position: "fixed",
            right: "2px",
            top: "60px",
            width: "15px"
          }}
        >
          {citydata.citys.map(obj => (
            <p onClick={this.clickTitle.bind(this, obj.title)}>{obj.title}</p>
          ))}
        </div>
      </div>
    );
  }
  componentDidMount() {
    // 初始化,挂在this上，方便获取
    this.myscroll = new BScroll("#selectedcity", {});
  }
  // 右侧点击事件
  clickTitle(val) {
    this.myscroll.scrollToElement("#" + val, 300);
  }
}
