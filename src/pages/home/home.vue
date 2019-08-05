<template>
  <div class="contentBox" id="home">
    <div class="main">
      <!-- nav -->
      <div class="header">
        <div class="homeNavs">
          <ul>
            <li>
              <a href="#/infoCentreIndex">资讯中心</a>
              <a href="#/shippingMarket">航运市场</a>
              <a href="#">政策公告</a>
              <a href="#">在线应用</a>
              <a href="#">航运发展</a>
              <a href="#">办事指南</a>
              <a href="#">专项资金</a>
              <a href="#/yangshan">洋山频道</a>
            </li>
          </ul>
        </div>
      </div>
      <!-- 轮播图 -->
      <div class="swipe">
        <van-swipe :autoplay="3000" indicator-color="white">
          <van-swipe-item>
            <img src="../../assets/img/navBar1.jpg" alt />
            <span>航海日来啦1111</span>
          </van-swipe-item>
          <van-swipe-item>
            <img src="../../assets/img/navBar2.jpeg" alt />
            <span>航海日来啦22222</span>
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="content">
        <!--最新资讯 -->
        <div class="onlyNews">
          <div class="latestLitle">
            <span>最新资讯</span>
            <span>
              <a href="#">
                <van-icon name="more-o" />
              </a>
            </span>
          </div>
          <div class="news">
            <ul>
              <li>
                <a href="#">减肥减肥减肥减肥减肥减肥减肥减肥减肥减肥经济法</a>
              </li>
              <li>
                <a href="#">减肥减肥减肥减肥减肥减肥减肥减肥减肥减肥经济法减肥减肥减肥减肥减肥减肥减肥减肥减肥减肥经济法</a>
              </li>
              <li>
                <a href="#">减肥减肥减肥减肥减肥减肥减肥减肥减肥减肥经济法减肥减肥减肥减肥</a>
              </li>
            </ul>
          </div>
        </div>
        <!--最新应用 -->
        <div class="latestApplication">
          <div class="latestLitle">
            <span>最新应用</span>
            <span>
              <a href="#">
                <van-icon name="more-o" />
              </a>
            </span>
          </div>
          <div class="application">
            <van-row gutter="15">
              <van-col span="8">
                <div class="onlyPic">
                  <div class="top">
                    <a href="#">
                      <img src="../../assets/img/单一窗口.jpg" alt />
                    </a>
                  </div>
                  <div class="bottom">
                    <!--  观看量-----暂弃 -->
                    <!-- <span style="margin-right:10px;">
                      <van-icon name="eye-o" />
                      <span>1ddc11</span>
                    </span>-->
                    <span class="bookmark">
                      <van-icon name="bookmark-o" />
                      <a href="#">单一窗口</a>
                    </span>
                  </div>
                </div>
              </van-col>
              <van-col span="8">
                <div class="onlyPic">
                  <div class="top">
                    <a href="#">
                      <img src="../../assets/img/上港集卡平台.jpg" alt />
                    </a>
                  </div>
                  <div class="bottom">
                    <!-- <span style="margin-right:10px;">
                      <van-icon name="eye-o" />
                      <span>111</span>
                    </span>-->
                    <span class="bookmark">
                      <van-icon name="bookmark-o" />
                      <a href="#"></a>
                    </span>
                  </div>
                </div>
              </van-col>
              <van-col span="8">
                <div class="onlyPic">
                  <div class="top">
                    <a href="#">
                      <img src="../../assets/img/yingying1.jpg" alt />
                    </a>
                  </div>
                  <div class="bottom">
                    <!-- <span style="margin-right:10px;">
                      <van-icon name="eye-o" />
                      <span>111</span>
                    </span>-->
                    <span class="bookmark">
                      <van-icon name="bookmark-o" />
                      <a href="#"></a>
                    </span>
                  </div>
                </div>
              </van-col>
              <van-col span="8">
                <div class="smallPic">
                  <div class="top">
                    <div class="left">
                      <a href="#">
                        <img src="../../assets/img/散货码头进港查询.png" alt />
                      </a>
                    </div>
                    <span>
                      <a href="#">散货码头进港查询</a>
                    </span>
                  </div>
                  <div class="bottom">
                    <!-- <span style="margin-right:10px;">
                      <van-icon name="eye-o" />
                      <span>11ewdsd</span>
                    </span>-->
                    <span class="bookmark">
                      <van-icon name="bookmark-o" />
                      <a href="#">进港</a>
                    </span>
                  </div>
                </div>
              </van-col>
              <van-col span="8">
                <div class="smallPic">
                  <div class="top">
                    <div class="left">
                      <a href="#">
                        <img src="../../assets/img/电子装箱单（运抵报告）查询.png" alt />
                      </a>
                    </div>
                    <span>
                      <a href="#">电子装箱单(运抵报告)查询</a>
                    </span>
                  </div>
                  <div class="bottom">
                    <!-- <span style="margin-right:10px;">
                      <van-icon name="eye-o" />
                      <span>111</span>
                    </span>-->
                    <span class="bookmark">
                      <van-icon name="bookmark-o" />
                      <a href="#">口岸数据</a>
                    </span>
                  </div>
                </div>
              </van-col>
              <van-col span="8">
                <div class="smallPic">
                  <div class="top">
                    <div class="left">
                      <a href="#">
                        <img src="../../assets/img/海关放行信息查询.png" alt />
                      </a>
                    </div>
                    <span>
                      <a href="#">海关放行信息查询</a>
                    </span>
                  </div>
                  <div class="bottom">
                    <!-- <span style="margin-right:10px;">
                      <van-icon name="eye-o" />
                      <span>111</span>
                    </span>-->
                    <span class="bookmark">
                      <van-icon name="bookmark-o" />
                      <a href="#">口岸数据</a>
                    </span>
                  </div>
                </div>
              </van-col>
              <van-col span="8">
                <div class="smallPic">
                  <div class="top">
                    <div class="left">
                      <a href="#">
                        <img src="../../assets/img/提货单查询.png" alt />
                      </a>
                    </div>
                    <span>
                      <a href="#">检验检疫提货单查询</a>
                    </span>
                  </div>
                  <div class="bottom">
                    <!-- <span style="margin-right:10px;">
                      <van-icon name="eye-o" />
                      <span>111</span>
                    </span>-->
                    <span class="bookmark">
                      <van-icon name="bookmark-o" />
                      <a href="#">口岸数据</a>
                    </span>
                  </div>
                </div>
              </van-col>
              <van-col span="8">
                <div class="smallPic">
                  <div class="top">
                    <div class="left">
                      <a href="#">
                        <img src="../../assets/img/快件营运人回执1.png" alt />
                      </a>
                    </div>
                    <span>
                      <a href="#">快件营运人查询</a>
                    </span>
                  </div>
                  <div class="bottom">
                    <!-- <span style="margin-right:10px;">
                      <van-icon name="eye-o" />
                      <span>111</span>
                    </span>-->
                    <span class="bookmark">
                      <van-icon name="bookmark-o" />
                      <a href="#">口岸数据</a>
                    </span>
                  </div>
                </div>
              </van-col>
              <van-col span="8">
                <div class="smallPic">
                  <div class="top">
                    <div class="left">
                      <a href="#">
                        <img src="../../assets/img/检验检疫申报回执查询.png" alt />
                      </a>
                    </div>
                    <span>
                      <a href="#">检验检疫申报回执查询</a>
                    </span>
                  </div>
                  <div class="bottom">
                    <!-- <span style="margin-right:10px;">
                      <van-icon name="eye-o" />
                      <span>111</span>
                    </span>-->
                    <span class="bookmark">
                      <van-icon name="bookmark-o" />
                      <a href="#">报检</a>
                    </span>
                  </div>
                </div>
              </van-col>
            </van-row>
          </div>
        </div>
        <!-- 热门查询 -->
        <div class="hotSearch">
          <div class="latestLitle">
            <span>热门查询</span>
            <span>
              <a href="#">
                <van-icon name="more-o" />
              </a>
            </span>
          </div>
          <div class="search">
            <ul>
              <li>
                <div class="smallPic">
                  <div class="top">
                    <div class="left">
                      <a href="#">
                        <img src="../../assets/img/检验检疫申报回执查询.png" alt />
                      </a>
                    </div>
                    <span>
                      <a href="#">检验检疫申报回执查询</a>
                    </span>
                  </div>
                  <div class="bottom">
                    <!-- <span style="margin-right:10px;">
                      <van-icon name="eye-o" />
                      <span>112331</span>
                    </span>-->
                    <span class="bookmark">
                      <van-icon name="bookmark-o" />
                      <a href="#">报检</a>
                    </span>
                  </div>
                </div>
              </li>
              <li>
                <div class="smallPic">
                  <div class="top">
                    <div class="left">
                      <a href="#">
                        <img src="../../assets/img/检验检疫申报回执查询.png" alt />
                      </a>
                    </div>
                    <span>
                      <a href="#">检验检疫申报回执查询</a>
                    </span>
                  </div>
                  <div class="bottom">
                    <!-- <span style="margin-right:10px;">
                      <van-icon name="eye-o" />
                      <span>111</span>
                    </span>-->
                    <span class="bookmark">
                      <van-icon name="bookmark-o" />
                      <a href="#">报检</a>
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!-- 航运指数 -->
        <div class="shipIndex">
          <div class="latestLitle">
            <span>航运指数</span>
            <span>
              <a href="#">
                <van-icon name="more-o" />
              </a>
            </span>
          </div>
          <div class="ship">
            <div>
              <div class="onlyPic">
                <div class="top">
                  <a href="#">
                    <img src="../.././assets/img/单一窗口.jpg" alt />
                  </a>
                </div>
                <div class="bottom">
                  <!-- <span style="margin-right:10px;">
                      <van-icon name="eye-o" />
                      <span>1ddc11</span>
                  </span>-->
                  <span class="bookmark">
                    <van-icon name="bookmark-o" />
                    <a href="#">中国长江集装箱运价指数报告（2019年第3期）</a>
                  </span>
                </div>
                <div class="shipText">
                  <a href="#">11212222</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 综合交通 -->
        <div class="onlyNews">
          <div class="latestLitle">
            <span>综合交通</span>
            <span>
              <a href="#">
                <van-icon name="more-o" />
              </a>
            </span>
          </div>
          <div class="news">
            <ul>
              <li>
                <a href="#">减肥减肥减肥减肥减肥减肥减肥减肥减肥减肥经济法</a>
              </li>
              <li>
                <a href="#">减肥减肥减肥减肥减肥减肥减肥减肥减肥减肥经济法减肥减肥减肥减肥减肥减肥减肥减肥减肥减肥经济法</a>
              </li>
            </ul>
          </div>
        </div>
        <!-- 政策公告 -->
        <div class="onlyNews">
          <div class="latestLitle">
            <span>政策公告</span>
            <span>
              <a href="#">
                <van-icon name="more-o" />
              </a>
            </span>
          </div>
          <div class="news">
            <ul>
              <li>
                <a href="#">减肥减肥减肥减肥减肥减肥减肥减肥减肥减肥经济法</a>
              </li>
              <li>
                <a href="#">减肥减肥减肥减肥减肥减肥减肥减肥减肥减肥经济法减肥减肥减肥减肥减肥减肥减肥减肥减肥减肥经济法</a>
              </li>
            </ul>
          </div>
        </div>
        <!-- 建设历程 -->
        <div class="buildProcess">
          <div class="latestLitle">
            <span>建设历程</span>
            <span>
              <a href="#">
                <van-icon name="more-o" />
              </a>
            </span>
          </div>
          <div class="building">
            <ul>
              <li>
                <div class="noPic">
                  <div class="top">
                    <span>
                      <a href="#">检验检疫申报回执查询</a>
                    </span>
                  </div>
                  <div class="bottom">
                    <!-- <span style="margin-right:10px;">
                      <van-icon name="eye-o" />
                      <span>111</span>
                    </span>-->
                    <span class="bookmark">
                      <van-icon name="bookmark-o" />
                      <a href="#">报检</a>
                    </span>
                  </div>
                </div>
              </li>
              <li>
                <div class="noPic">
                  <div class="top">
                    <span>
                      <a href="#">检验检疫申报回执查询</a>
                    </span>
                  </div>
                  <div class="bottom">
                    <!-- <span style="margin-right:10px;">
                      <van-icon name="eye-o" />
                      <span>111</span>
                    </span>-->
                    <span class="bookmark">
                      <van-icon name="bookmark-o" />
                      <a href="#">报检</a>
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!--最热文章 -->
        <div class="hotArticle onlyNews">
          <div class="latestLitle">
            <span>最热文章</span>
          </div>
          <div class="news">
            <ul>
              <li>
                <a href="#">
                   <span>1</span>
                  <span>减肥减肥减肥减肥减肥减肥减肥减肥减肥减肥经济减肥减肥减肥减肥减减肥减肥减肥减肥减法</span>
                </a>
              </li>
              <li>
                <a href="#">
                   <span>1</span>
                  <span>减肥减肥减肥减肥减肥减肥减肥减肥减肥减肥经济减肥减肥减肥减肥减减肥减肥减肥减肥减法</span>
                </a>
              </li>
             
            </ul>
          </div>
        </div>
        <!--图片新闻 -->
        <div class="picNews">
          <div class="latestLitle">
            <span>图片新闻</span>
            <span>
              <a href="#">
                <van-icon name="more-o" />
              </a>
            </span>
          </div>
          <div>
            <ul>
              <li>
                <a href="#">
                  <div class="picAndnews">
                    <div class="newsText">
                      <span>挥洒好傻好熟悉四大法律房间大就能发动机大挥洒好傻好熟悉四大法律房间大就能发动机大</span>
                    </div>
                    <div class="newsPic">
                      <img src="../../assets/img/检验检疫申报回执查询.png" alt />
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <!-- 微信扫码 -->
        <div class="wxScan">
          <p>
            微信扫一扫  快加入我们吧！
          </p>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import '../../assets/css/global.less'
export default {
  name: "home",
  data() {
    return {
      homeNavs: ['资讯中心']
    };
  },
  methods:{
  
  }
};
</script>
<style lang="less">
#home {
  // 轮播图小圆点的位置
  .van-swipe__indicators {
    bottom: 40px;
  }
}
</style>
<style lang="less" scoped>

// 首页模块 top和bottom部分公共样式
.picTopBot {
  padding: 5px 3px;
  border-bottom: 1px dashed #eee;
  .top {
    position: relative;
    .left {
      position: absolute;
      top: 0;
      left: 0;
    }
  }
  .bottom {
    margin-top: 10px;
    margin-left: 5px;
    a {
      display: inline-block;
      font-size: 12px;
    }
  }
}

#home  {
  background: #fafcff;
  font-size: 14px;
  img {
    width: 100%;
  }
  .header {
    .homeNavs {
      padding: 5px 10px;
      background: #fafcff;
      overflow: hidden;
      ul {
        li {
          float: left;
          a {
            float: left;
            width: 88px;
            height: 25px;
            line-height: 25px;
            margin-bottom: 10px;
            &:nth-last-child(-n + 4) {
              margin-bottom: 0px;
            }
          }
        }
      }
    }
  }
  // 轮播图
  .swipe {
    margin-bottom: 10px;
    img {
      width: 100%;
      // height: 160px;
    }
    span {
      display: inline-block;
      padding: 5px 5px 8px 5px;
      color: #666;
    }
  }
  .content {
    padding: 0 10px;
   
    // 最新应用
    .latestApplication {
      .alignAndBot15;
      .application {
        padding: 5px 0;
        font-size: 12px;
        a {
          display: inline-block;
        }
        .onlyPic {
          height: 105px;
          padding: 10px 0;
          border-bottom: 1px dashed #eee;
          box-sizing: border-box;
          img {
            height: 60px;
          }
        }
        .smallPic {
          // height: 65px;
          .picTopBot;
          .top {
            padding-left: 25px;
          }
          .bottom {
            margin-left: 0px;
          }
          img {
            width: 20px;
            height: 20px;
          }
        }
      }
    }
    // 热门搜索
    .hotSearch {
      .alignAndBot15;
      .search {
        padding: 5px 0;
        font-size: 14px;
        .smallPic {
          .picTopBot;
          .top {
            padding-left: 50px;
          }
          img {
            width: 25px;
            height: 25px;
          }
        }
      }
    }
    // 建设历程
    .buildProcess {
      .alignAndBot15;
      .building {
        font-size: 14px;
        .noPic {
          .picTopBot;
          
        }
      }
    }
    // 最新应用
    .shipIndex {
      .alignAndBot15;
      .ship {
        padding: 5px 0;
        font-size: 12px;
        a {
          display: inline-block;
        }
        .onlyPic {
          padding: 10px 0;
          border-bottom: 1px dashed #eee;
          box-sizing: border-box;
          .shipText {
            a {
              display: block;
              padding-top: 10px;
              box-sizing: border-box;
              font-size: 16px;
            }
          }
        }
      }
    }
    
   
    // 微信扫码
    .wxScan{
      .alignAndBot15;
    }
  }
}
</style>