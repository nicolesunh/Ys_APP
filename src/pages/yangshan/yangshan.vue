<template>
  <div class="contentBox" id="yangshan">
    <div class="main">
      <div class="header">
        <!-- <van-tabs background="#fafcff" color="#5aa3e8" v-model="active" >
          <van-tab v-for="(item,index) in tabs" :title="item" :key="index"></van-tab>
        </van-tabs> -->
      </div> 
      <!-- 轮播图 -->
      <div class="swipe"> 
        <van-swipe :autoplay="3000" indicator-color="white">
          <van-swipe-item>
            <img src="http://www.shisc.net/p/yangshan/images/2.jpg" alt />
            <span>世界一流大港</span>
          </van-swipe-item>
          <van-swipe-item>
            <img src="http://www.shisc.net/p/yangshan/images/3.jpg" alt />
            <span>国际航运枢纽港</span>
          </van-swipe-item>
          <van-swipe-item>
            <img src="../../assets/img/headerbg.jpg" alt />
            <span>长江流域“龙头”</span>
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="content">
        <!-- 新闻资讯 -->
         <div class="latestApplication">
            <div class="latestLitle">
              <span>新闻资讯</span>
              <!-- <span>
                <a href="#">
                  <van-icon name="more-o" />
                </a>
              </span> -->
            </div>
            <div class="application">
              <van-row gutter="15">
                <van-col span="8">
                  <div class="onlyPic">
                    <div class="top">
                      <a href="#">
                        <img src="../.././assets/img/tongzhi.jpg" alt />
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
                        <a href="#">通知公告</a>
                      </span>
                    </div>
                  </div>
                </van-col>
                <van-col span="8">
                  <div class="onlyPic">
                    <div class="top">
                      <a href="#">
                        <img src="../.././assets/img/gangkou.jpg" alt />
                      </a>
                    </div>
                    <div class="bottom">
                      <!-- <span style="margin-right:10px;">
                        <van-icon name="eye-o" />
                        <span>111</span>
                      </span>-->
                      <span class="bookmark">
                        <van-icon name="bookmark-o" />
                        <a href="#">港口新闻</a>
                      </span>
                    </div>
                  </div>
                </van-col>
                <van-col span="8">
                  <div class="onlyPic">
                    <div class="top">
                      <a href="#">
                        <img src="../.././assets/img/shanghai.jpg" alt />
                      </a>
                    </div>
                    <div class="bottom">
                      <!-- <span style="margin-right:10px;">
                        <van-icon name="eye-o" />
                        <span>111</span>
                      </span>-->
                      <span class="bookmark">
                        <van-icon name="bookmark-o" />
                        <a href="http://www.shisc.net/archives/category/home/zxzx/">上海新闻</a>
                      </span>
                    </div>
                  </div>
                </van-col>
                <van-col span="8">
                  <div class="onlyPic">
                    <div class="top">
                      <a href="#">
                        <img src="../.././assets/img/guonei.jpg" alt />
                      </a>
                    </div>
                    <div class="bottom">
                      <!-- <span style="margin-right:10px;">
                        <van-icon name="eye-o" />
                        <span>111</span>
                      </span>-->
                      <span class="bookmark">
                        <van-icon name="bookmark-o" />
                        <a href="http://www.shisc.net/archives/category/home/zxzx/">国内新闻</a>
                      </span>
                    </div>
                  </div>
                </van-col>
                <van-col span="8">
                  <div class="onlyPic">
                    <div class="top">
                      <a href="#">
                        <img src="../.././assets/img/guoji.jpg" alt />
                      </a>
                    </div>
                    <div class="bottom">
                      <!-- <span style="margin-right:10px;">
                        <van-icon name="eye-o" />
                        <span>111</span>
                      </span>-->
                      <span class="bookmark">
                        <van-icon name="bookmark-o" />
                        <a href="http://www.shisc.net/archives/category/home/zxzx/">国际新闻</a>
                      </span>
                    </div>
                  </div>
                </van-col>
                <van-col span="8">
                  <div class="onlyPic">
                    <div class="top">
                      <a href="#">
                        <img src="../.././assets/img/tongji.jpg" alt />
                      </a>
                    </div>
                    <div class="bottom">
                      <!-- <span style="margin-right:10px;">
                        <van-icon name="eye-o" />
                        <span>111</span>
                      </span>-->
                      <span class="bookmark">
                        <van-icon name="bookmark-o" />
                        <a href="http://www.shisc.net/archives/category/home/zxzx/">统计数据</a>
                      </span>
                    </div>
                  </div>
                </van-col>
              </van-row>
            </div>
        </div>
        <!-- 在线查询 -->
        <div class="olSearch">
          <div class="latestLitle">
            <span>在线查询</span>
            <!-- <span>
              <a href="#">
                <van-icon name="more-o" />
              </a>
            </span> -->
          </div>
          <div class="search">
            <ul>
              <li>
                <div class="smallPic">
                  <div class="top">
                    <div class="left">
                      <router-link :to="{path:'/chaxun',query:{id:'1'} }">
                        <img src="../.././assets/img/jingxi.png" alt />
                      </router-link>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="smallPic">
                  <div class="top">
                    <div class="left">
                      <router-link :to="{path:'/chaxun',query:{id:'3'} }">
                        <img src="../.././assets/img/haikuang.png" alt />
                      </router-link>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="smallPic">
                  <div class="top">
                    <div class="left">
                      <a href="http://www.dhybzx.org/OceanPortal/findHistoryDocWarning.action?type=storm">
                        <img src="../.././assets/img/kaogang.png" alt />
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="smallPic">
                  <div class="top">
                    <div class="left">
                      <router-link :to="{path:'/chaxun',query:{id:'5'} }">
                        <img src="../.././assets/img/ditu.png" alt />
                      </router-link>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="smallPic">
                  <div class="top">
                    <div class="left">
                      <router-link :to="{path:'/chaxun',query:{id:'4'} }">
                        <img src="../.././assets/img/jiaotong.png" alt />
                      </router-link>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="smallPic">
                  <div class="top">
                    <div class="left">
                      <router-link :to="{path:'/chaxun',query:{id:'2'} }">
                        <img src="../.././assets/img/tianqi.png" alt />
                      </router-link>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!-- 洋山手册 -->
        <div class="ysBook">
          <div class="latestLitle">
            <span>洋山手册</span>
            <!-- <span>
              <a href="#">
                <van-icon name="more-o" />
              </a>
            </span> -->
          </div>
          <div class="book">
            <div>
              <div class="onlyPic">
                <div class="top">
                  <a href="#">
                    <img src="http://www.shisc.net/p/yangshan/images/pic3-450x410.png" alt />
                  </a>
                </div>
              </div>  
                <!-- 热门查询 -->
              <div class="search">
                <ul>
                  <li v-for="(item,index) in news" :key='index'>
                    <div class="smallPic">
                      <div class="top">
                        <div class="left">
                            <van-icon name="orders-o" size="20px"/>
                        </div>
                        <span>
                          <!-- <p @click="go(idal)">{{item.text}}</p> -->
                          <p><router-link :to="{path:'/shouce',query:{d:item.id} }">{{item.text}}</router-link></p>
                        </span>
                      </div>
                    </div>
                  </li>
                </ul>
                <!-- <ul>
                  <li>
                    <div class="smallPic">
                      <div class="top">
                        <div class="left">
                            <van-icon name="user-circle-o" size="20px"/>
                        </div>
                        <span>
                          <a href="#">单位名录</a>
                        </span>
                      </div>
                      
                    </div>
                  </li>
                  <li>
                    <div class="smallPic">
                      <div class="top">
                        <div class="left">
                            <van-icon name="browsing-history-o" size="20px"/>
                        </div>
                        <span>
                          <a href="#">码头概况</a>
                        </span>
                      </div>
                     
                    </div>
                  </li>
                  <li>
                    <div class="smallPic">
                      <div class="top">
                        <div class="left">
                            <van-icon name="orders-o" size="20px"/>
                        </div>
                        <span>
                          <a href="#">业务介绍</a>
                        </span>
                      </div>
                      
                    </div>
                  </li>
                  <li>
                    <div class="smallPic">
                      <div class="top">
                        <div class="left">
                            <van-icon name="flag-o" size="20px"/>
                        </div>
                        <span>
                          <a href="#">操作指南</a>
                        </span>
                      </div>
                      
                    </div>
                  </li>
                </ul> -->
              </div>
            </div>
          </div>
        </div>
        <!--在线服务 -->
        <div class="shipping">
          <div class="latestLitle">
           <span>在线查询</span>
            <span>
              <!-- <a href="#">
                <van-icon name="more-o" />
              </a> -->
              <span style="margin:0 3px; color: rgb(179, 164, 164);">查询/应用</span>
              
              <van-switch v-model="checked" size="12px" />
            </span>
          </div>
          <div class="service" v-if="checked">
            <van-grid :border="false" :column-num="4">
              <van-grid-item url="http://www.shisc.net/p/archives/32007">
                <van-image src="http://www.shisc.net/p/yangshan/images/clients/yinhang.jpg" />
              </van-grid-item>
              <van-grid-item url="http://www.shisc.net/p/archives/32007">
                <van-image src="http://www.shisc.net/p/yangshan/images/clients/sanhuo.jpg" />
              </van-grid-item>
              <van-grid-item url="http://www.shisc.net/p/archives/32007">
                <van-image src="http://www.shisc.net/p/yangshan/images/clients/neimao.jpg" />
              </van-grid-item>
              <van-grid-item url="http://www.shisc.net/p/archives/32007">
                <van-image src="http://www.shisc.net/p/yangshan/images/clients/more.jpg" />
              </van-grid-item>
            </van-grid>
          </div>
          <div class="service" v-else>
            <van-grid :border="false" :column-num="4">
              <van-grid-item url="http://www.shisc.net/p/archives/32007">
                <van-image src="http://www.shisc.net/p/yangshan/images/clients/danyi.jpg" />
              </van-grid-item>
              <van-grid-item url="http://www.shisc.net/p/archives/32007">
                <van-image src="http://www.shisc.net/p/yangshan/images/clients/huandan.jpg" />
              </van-grid-item>
              <van-grid-item url="http://www.shisc.net/p/archives/32007">
                <van-image src="http://www.shisc.net/p/yangshan/images/clients/waizi.jpg" />
              </van-grid-item>
              <van-grid-item url="http://www.shisc.net/p/archives/32007">
                <van-image src="http://www.shisc.net/p/yangshan/images/clients/more.jpg" />
              </van-grid-item>
            </van-grid>
          </div>
        </div>
        <!--办事指南 -->
        <div class="shipping">
          <div class="latestLitle">
            <span>办事指南</span>
            <!-- <span>
              <a href="#">
                <van-icon name="more-o" />
              </a>
            </span> -->
          </div>
          <div class="guideSearch">
                <ul>
                  <li>
                    <div class="smallPic">
                      <div class="top">
                        <div class="left">
                            <van-icon name="location" size="14px"/>
                        </div>
                        <span>
                          <a href="http://www.portshanghai.com.cn/jtwbs/xinwen/2016-7/1467363134228.html">上海港收费</a>
                        </span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="smallPic">
                      <div class="top">
                        <div class="left">
                            <van-icon name="location" size="14px"/>
                        </div>
                        <span>
                          <a href="http://www.sh-pilots.com.cn/info/Application.aspx">引航服务</a>
                        </span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="smallPic">
                      <div class="top">
                        <div class="left">
                            <van-icon name="location" size="14px"/>
                        </div>
                        <span>
                          <a href="http://www.shisc.net/p/%e4%b8%93%e9%a1%b9%e8%b5%84%e9%87%91">航运基金申报</a>
                        </span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="smallPic">
                      <div class="top">
                        <div class="left">
                            <van-icon name="location" size="14px"/>
                        </div>
                        <span>
                          <a href="http://www.shisc.net/p/archives/43593">国际贸易单一窗口</a>
                        </span>
                      </div>
                    </div>
                  </li>
                   <li>
                    <div class="smallPic">
                      <div class="top">
                        <div class="left">
                            <van-icon name="location" size="14px"/>
                        </div>
                        <span>
                          <a href="#">自贸区投资办事</a>
                        </span>
                      </div>
                    </div>
                  </li>
                   <li>
                    <div class="smallPic">
                      <div class="top">
                        <div class="left">
                            <van-icon name="location" size="14px"/>
                        </div>
                        <span>
                          <a href="#">船舶所有权登记</a>
                        </span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
        </div>
        <!--视频欣赏 -->
        <div class="shipping">
          <div class="latestLitle">
            <span>视频欣赏</span>
          </div>
          <div style="text-align:center;padding-top:20px;">
            <span>阅尽“东方大港”洋山港的繁华</span>
              <div class="myVideo">
                  <video controls="controls"  height="300px" width="100%">
                    <source src="http://www.shisc.net/p/wp-content/uploads/2017/05/央视新闻160秒-阅尽“东方大港”洋山港的繁华.mp4?_=1" type="video/mp4" >
                </video>
              </div>
          </div>
        </div>
        <!--口岸服务-->
        <div class="shipping">
          <div class="latestLitle">
            <span>口岸服务</span>
          </div>
          <div>
            <van-grid :border="false" :column-num="3">
              <van-grid-item url="http://www.jt.sh.cn/jtw/index.html" >
                <img src="../.././assets/img/icon_gk_member.gif"/>
                <span>港政航政</span>
              </van-grid-item>
              <van-grid-item url="http://www.shcus.gov.cn/" >
                <img src="../.././assets/img/logo_cus.gif"/>
                <span>上海海关</span>
              </van-grid-item>
              <van-grid-item url="">
                <img src="../.././assets/img/logo_jyjy.gif"/>
                <span>洋山检验检疫</span>
              </van-grid-item>
              <van-grid-item url="">
                <img src="../.././assets/img/ysgj.gif"/>
                <span>洋山边检</span>
              </van-grid-item>
              <van-grid-item url="">
                <img src="../.././assets/img/icon_hsj_member.gif"/>
                <span>上海海事</span>
              </van-grid-item>
              <van-grid-item url="http://zwdt.sh.gov.cn/govPortals/organ_index.do?organ=SHGASH">
                <img src="../.././assets/img/icon_ga_member.gif" />
                <span>港口公安</span>
              </van-grid-item>
            </van-grid>
          </div>
        </div>
        <!--呼叫中心-->
        <div class="shipping">
          <div class="latestLitle">
            <span>呼叫中心</span>
          </div>
            <div class="newsText">
              <p>洋山特服号： 20260154</p>
              <span style="margin-right:10px;font-size: 12px;" class="readNums">
                <span>
                  呼叫中心作为洋山深水港综合信息服务平台的子系统之一，接入方式以语音接入为主，同时能够处理email和传真请求。主要为洋山各政府部门、运营单位、各类企业提供高效服务。
                </span>
              </span><br>
              <div style="text-align:center"><img src="http://www.shisc.net/p/yangshan/images/callcenter_pic.gif" alt="" width="50%" height="50%"></div>
              <div class="mytext">
                <van-collapse v-model="activeNames">
                  <van-collapse-item title="呼叫中心在第一期实现以下功能：" name="1">
                    • 相关业务咨询 ：对于业务办理情况不熟悉的用户，声讯服务子系统坐席人员将为其提供受理前咨询，为各类企业办理业务提供咨询服务。<br>
                    • 港区 114 ： 用户能对港区内各单位的电话号码进行自动语音查询和人工查询。为用户提供方便、快捷的查询手段，提高办事效率。<br>
                    • 实况信息 ：用户得到关于洋山深水港区的天气信息、海洋和大桥交通等实况信息，为各类企业用户出行办事提供重要参考。
                  </van-collapse-item>
                </van-collapse>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { log } from 'util';
export default {
  name: "yangshan",
  data() {
    return {
      scroll:'',
      checked:true,
      URL:'#',
      news:[
        {text:'单位名录',id:1},
        {text:'码头概况',id:2},
        {text:'业务介绍',id:3},
        {text:'操作指南',id:4},
      ],
      activeNames: [''],
      active: 0,
      tabs: ["首页", "新闻资讯", "在线查询", "洋山手册", "在线服务", "办事指南", "视频欣赏", "洋山实况", "呼叫中心"]
    };
  },

};
</script>
<style lang="less">
</style>
<style lang="less" scoped>
.shippingNoPic {
  padding: 5px 10px;
}
#yangshan {
  .header {
    margin-top: -20px;
    margin-bottom: 15px;
  }
  .content {
    padding: 5px 10px;
    .shipping {
      .alignAndBot15;
      //   无图片
      .shippingNoPic {
          padding: 0 5px;
        border-bottom: 1px dashed #eee;
        .newsText {
          padding: 10px 0;
          font-size: 14px;
          box-sizing: border-box;
          p {
            margin-bottom: 10px;
          }
        }
      }
 
    }
  }
}
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
      position:absolute;
      z-index:2; 
      top: 15%;
      left: 18%;
      color:white;
    }
  }
  // 最新应用
    .latestApplication {
      .alignAndBot15;
      .application {
        padding: 5px 0 10px 0;
        font-size: 12px;
        margin:0 30px;
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
            width: 80%;
          }
        }
        .smallPic {
          height: 65px;
          
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
  // 在线查询
    .olSearch {
      .alignAndBot15;
      .search {
        padding: 5px 0;
        font-size: 14px;
        margin-bottom: 35px;
        li{
          display: inline-block;
          width: 16.666%;
        }
        .smallPic {
          .top {
            padding-left: 10px;
          }
          img {
            width: 48px;
            height:33px;
          }
        }
      }
    }
    //洋山手册
    .ysBook {
      .alignAndBot15;
      .search {
        padding: 5px 0;
        font-size: 14px;
        margin:0 5px 0 45px;
        li{
          display: inline-block;
          width: 50%;
        }
        .smallPic {
          padding: 10px 0;
          border-bottom: 1px dashed #eee;
          box-sizing: border-box;
          .top {
            padding-left: 25px;
          }
          img {
            width: 25px;
            height: 25px;
          }
        }
      }
      .onlyPic{
        text-align: center;
        img{
          width: 40%;
          height: 40%;
        }
      }
    }
    //办事指南
    .guideSearch{
        padding: 5px 0;
        font-size: 12px;
        margin:5px 5px 0 5px;
        li{
          display: inline-block;
          width: 33.333%;
          padding-bottom: 15px;
          a{
            padding-left: 18px;
          }
        }
     }
    //公用
    .top {
    position: relative;
    .left {
      position: absolute;
      top: 0;
      left: 0;
    }
  }
</style>
