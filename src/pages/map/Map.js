import React, { Component } from "react";

export default class Map extends Component {
  render() {
    return (
      <div id="mymap" style={{ width: "100%", height: "100%" }}>
        {/* 地图显示当前城市 */}
      </div>
    );
  }
  // 地图显示当前城市
  componentDidMount() {
    // 地图定位
    // script引入的是全局，挂在window上的，所以需要window.amap
    // let _this = this;
    var mymap = new window.AMap.Map("mymap", {
      resizeEnable: true,
      center: [116.397428, 39.90923],
      zoom: 13
    });
    //实例化城市查询类
    var citysearch = new window.AMap.CitySearch();
    //自动获取用户IP，返回当前城市
    citysearch.getLocalCity(function(status, result) {
      if (status === "complete" && result.info === "OK") {
        if (result && result.city && result.bounds) {
          //   var cityinfo = result.city;
          var citybounds = result.bounds;
          // document.getElementById("info").innerHTML ="您当前所在城市：" + cityinfo;
          // console.log(cityinfo);
          //   _this.setState({ city: cityinfo });
          //地图显示当前城市
          mymap.setBounds(citybounds);
          // console.log(citybounds);
        }
      } else {
        // document.getElementById("info").innerHTML = result.info;
        console.log(result.info);
      }
    });
  }
}
