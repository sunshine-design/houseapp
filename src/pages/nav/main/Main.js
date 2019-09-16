import React, { Component } from "react";
import { connect } from "react-redux";
import { Carousel, WingBlank, Flex, InputItem, Grid } from "antd-mobile";
import "./main.css";
import { gethouselist, ip } from "../../../api/api";
import BScorll from "better-scroll";
var houselist = [
  { icon: "loans.png", text: "我要贷款" },
  { icon: "compute.png", text: "房贷计算" },
  { icon: "know.png", text: "知识" },
  { icon: "scan.png", text: "扫一扫" }
].map(obj => {
  return {
    icon: require("../../../assets/images/" + obj.icon),
    text: obj.text
  };
});
class Main extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { val: "banner1.jpg", hash: "/" },
        { val: "banner2.jpg", hash: "/" }
      ], //轮播图
      imgHeight: 125,
      navlist: [
        { icon: "icon_nav1.png", text: "新房" },
        { icon: "icon_nav2.png", text: "二手房" },
        { icon: "icon_nav3.png", text: "租房" },
        { icon: "icon_nav4.png", text: "商铺写字楼" },
        { icon: "icon_nav5.png", text: "卖房" },
        { icon: "icon_nav6.png", text: "海外房产" },
        { icon: "icon_nav7.png", text: "小区房价" },
        { icon: "icon_nav8.png", text: "问答" },
        { icon: "icon_nav9.png", text: "交易中心" },
        { icon: "icon_nav10.png", text: "论坛" }
      ].map(item => {
        return {
          icon: require("../../../assets/images/" + item.icon),
          text: item.text
        };
      }),
      likehouse: [], //猜你喜欢
      city: "定位中" //城市定位
    };
  }
  render() {
    return (
      <div className="main">
        {/* 顶部 */}
        <Flex className="main_top" justify="between" align="center">
          <Flex align="center" onClick={this.changepath.bind(this, "/city")}>
            <label>{this.state.city}</label>
            <img src={require("../../../assets/images/more.png")} alt="more" />
          </Flex>
          <InputItem
            placeholder="Search"
            onClick={this.changepath.bind(this, "/search")}
          >
            <div
              style={{
                backgroundImage: `url(${require("../../../assets/images/icon_search.png")})`,
                backgroundSize: "cover",
                height: "22px",
                width: "22px"
              }}
            />
          </InputItem>
          <img
            src={require("../../../assets/images/map1.png")}
            alt="map"
            onClick={this.changepath.bind(this, "/map")}
          />
        </Flex>
        {/* 地图显示当前城市 */}
        {/* <div id="mymap" style={{ width: "100%", height: "100px" }}></div> */}
        {/* 轮播 */}
        <Carousel autoplay infinite>
          {this.state.data.map(obj => (
            <a
              key={obj.val}
              href={obj.hash}
              style={{
                display: "inline-block",
                width: "100%",
                height: this.state.imgHeight
              }}
            >
              <img
                src={require("../../../assets/images/" + obj.val)}
                alt=""
                style={{ width: "100%", verticalAlign: "top" }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event("resize"));
                  this.setState({ imgHeight: "auto" });
                }}
              />
            </a>
          ))}
        </Carousel>

        {/* 导航栏 */}
        <Grid
          data={this.state.navlist}
          hasLine={false}
          activeStyle={false}
          columnNum={5}
        />
        <div style={{ backgroundColor: "#fff" }}>
          <WingBlank size="md">
            {/* 竖向轮播 */}
            <Flex className="mainnew" align="center">
              <div className="mainnewtitle">房产头条</div>
              <Carousel
                className="my-carousel"
                vertical
                dots={false}
                dragging={false}
                swiping={false}
                autoplay
                infinite
              >
                <div className="v-item">美的云溪郡</div>
                <div className="v-item">恒大未来城</div>
                <div className="v-item">中国铁建西派国樾</div>
              </Carousel>
            </Flex>
          </WingBlank>
        </div>
        <div style={{ backgroundColor: "#fff" }}>
          <WingBlank size="md">
            {/* 房产全百科 */}
            <div>
              <Flex>
                <h3 className="houselist">房产全百科</h3>
                <span>专业的买房攻略</span>
              </Flex>
              <Grid data={houselist} hasLine={false} activeStyle={false} />
            </div>
          </WingBlank>
        </div>
        {/* 猜你喜欢 */}
        <div style={{ backgroundColor: "#fff" }}>
            <WingBlank size="md">
              <p className="likehouse">猜你喜欢</p>
              <div>
                {this.state.likehouse.map(obj => (
                  <Flex
                    key={obj.id}
                    justify="between"
                    onClick={this.clickhistory.bind(this, obj)}
                  >
                    <img
                      alt=""
                      src={ip + obj.imgs}
                      // src={"http://127.0.0.1:80" + obj.imgs}
                      style={{ width: "30%" }}
                    />
                    <div>
                      <p>{obj.name}</p>
                      <p>
                        <span
                          style={{
                            display: "inline-block",
                            marginRight: "5px"
                          }}
                        >
                          {obj.area}
                        </span>
                        <span>{obj.range}</span>{" "}
                      </p>
                      <p>
                        <span
                          style={{
                            display: "inline-block",
                            marginRight: "5px"
                          }}
                        >
                          {obj.type}
                        </span>
                        <span>{obj.point}平</span>
                      </p>
                    </div>
                    <div style={{ color: "#E1251B" }}>{obj.price}/平</div>
                  </Flex>
                ))}
              </div>
            </WingBlank>
        </div>
      </div>
    );
  }
  // 点击更改足迹里面的内容
  clickhistory(obj) {
    // console.log(obj);
    this.props.dispatch({
      type: "addhistory",
      obj
    });
  }
  changepath(val) {
    this.props.changepath.push(val);
    // console.log(this.props.changepath.push(val));
  }
  async componentDidMount() {
    // simulate img loading  减少首页加载量，性能强
    setTimeout(() => {
      this.setState({
        data: [
          { val: "banner1.jpg", hash: "/" },
          { val: "banner2.jpg", hash: "/" },
          { val: "banner3.jpg", hash: "/" },
          { val: "banner4.jpg", hash: "/" }
        ]
      });
    }, 100);
    // 猜你喜欢
    // es6
    /*  gethouselist().then(msg => {
      // console.log(msg.data);
      this.setState({
        likehouse: msg.data
      });
    }); */
    // es7划分到es8
    // async await 终极异步解决方案
    // await: 会等待promise异步执行完成
    // async: await指令只能在async函数中使用！！
    let msg = await gethouselist();
    // console.log(msg);
    this.setState({
      likehouse: msg.data
    });
    // 地图定位
    // script引入的是全局，挂在window上的，所以需要window.amap
    let _this = this;
    /*   var mymap = new window.AMap.Map("mymap", {
      resizeEnable: true,
      center: [116.397428, 39.90923],
      zoom: 13
    }); */
    //实例化城市查询类
    var citysearch = new window.AMap.CitySearch();
    //自动获取用户IP，返回当前城市
    citysearch.getLocalCity(function(status, result) {
      if (status === "complete" && result.info === "OK") {
        if (result && result.city && result.bounds) {
          var cityinfo = result.city;
          // var citybounds = result.bounds;
          // document.getElementById("info").innerHTML ="您当前所在城市：" + cityinfo;
          // console.log(cityinfo);
          _this.setState({ city: cityinfo });
          //地图显示当前城市
          // mymap.setBounds(citybounds);
          // console.log(citybounds);
        }
      } else {
        // document.getElementById("info").innerHTML = result.info;
        console.log(result.info);
      }
    });
  }

  // 手动清除内存
  /*  componentWillUnmount() {
    // houselist = null;
  } */
}

export default connect()(Main); //只传递dispatch
