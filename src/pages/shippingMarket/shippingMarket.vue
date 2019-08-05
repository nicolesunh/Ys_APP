<template>
  <div class="contentBox" id="shippingMarket">
    <div class="main">
      <div class="header">
        <van-tabs background="#fafcff" color="#5aa3e8" v-model="active">
          <van-tab v-for="(item,index) in tabs" :title="item" :key="index"></van-tab>
        </van-tabs>
      </div>
      <div class="content">
        <!--集装箱运输市场 -->
        <div class="shipping">
          <div class="latestLitle">
            <span>集装箱运输市场</span>
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
                  <div class="shippingNoPic">
                    <div class="newsText">
                      <p>挥洒好傻好熟悉四大法律房间大就能发动机大挥洒好傻好熟悉四大法律房间大就能发动机大</p>
                      <span style="margin-right:20px;font-size: 12px;" class="readNums">
                        <van-icon name="eye-o" size="14px" />
                        <span>1ddc11</span>
                      </span>
                      <span style="margin-right:10px;font-size: 12px;" class="bookmark">
                        <van-icon name="bookmark-o" size="14px" />
                        <span>中国长江集装</span>
                      </span>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <!--干散货运输市场 -->
        <div class="shipping">
          <div class="latestLitle">
            <span>干散货运输市场</span>
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
                  <div class="shippingNoPic">
                    <div class="newsText">
                      <p>挥洒好傻好熟悉四大法律房间大就能发动机大挥洒好傻好熟悉四大法律房间大就能发动机大</p>
                      <span style="margin-right:20px;font-size: 12px;" class="readNums">
                        <van-icon name="eye-o" size="14px" />
                        <span>1ddc11</span>
                      </span>
                      <span style="margin-right:10px;font-size: 12px;" class="bookmark">
                        <van-icon name="bookmark-o" size="14px" />
                        <span>中国长江集装</span>
                      </span>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <!--油轮运输市场 -->
        <div class="shipping">
          <div class="latestLitle">
            <span>油轮运输市场</span>
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
                  <div class="shippingNoPic">
                    <div class="newsText">
                      <p>挥洒好傻好熟悉四大法律房间大就能发动机大挥洒好傻好熟悉四大法律房间大就能发动机大</p>
                      <span style="margin-right:20px;font-size: 12px;" class="readNums">
                        <van-icon name="eye-o" size="14px" />
                        <span>1ddc11</span>
                      </span>
                      <span style="margin-right:10px;font-size: 12px;" class="bookmark">
                        <van-icon name="bookmark-o" size="14px" />
                        <span>中国长江集装</span>
                      </span>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <!--船舶市场-->
        <div class="shipping">
          <div class="latestLitle">
            <span>船舶市场</span>
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
                  <div class="shippingNoPic">
                    <div class="newsText">
                      <p>挥洒好傻好熟悉四大法律房间大就能发动机大挥洒好傻好熟悉四大法律房间大就能发动机大</p>
                      <span style="margin-right:20px;font-size: 12px;" class="readNums">
                        <van-icon name="eye-o" size="14px" />
                        <span>1ddc11</span>
                      </span>
                      <span style="margin-right:10px;font-size: 12px;" class="bookmark">
                        <van-icon name="bookmark-o" size="14px" />
                        <span>中国长江集装</span>
                      </span>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <!--港口发展 -->
        <div class="shipping">
          <div class="latestLitle">
            <span>港口发展</span>
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
                  <!-- :class   -->
                  <div class="shippingPic" v-if="true">
                    <div class="newsText">
                      <p>挥洒好傻好熟悉四大法律房间大就能发动机大挥洒好傻好熟悉四大法律房间大就能发动机大</p>
                      <span style="margin-right:10px;font-size: 12px;" class="readNums">
                        <van-icon name="eye-o" size="14px" />
                        <span>1ddc11</span>
                      </span>
                      <span style="margin-right:10px;font-size: 12px;" class="bookmark">
                        <van-icon name="bookmark-o" size="14px" />
                        <span>中国长江集装</span>
                      </span>
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
        <!--航运指数 -->
        <div class="shipping">
          <div class="latestLitle">
            <span>航运指数</span>
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
                  <!-- :class   -->
                  <div class="shippingPic" v-if="true">
                    <div class="newsText">
                      <p>挥洒好傻好熟悉四大法律房间大就能发动机大挥洒好傻好熟悉四大法律房间大就能发动机大</p>
                      <span style="margin-right:10px;font-size: 12px;" class="readNums">
                        <van-icon name="eye-o" size="14px" />
                        <span>1ddc11</span>
                      </span>
                      <span style="margin-right:10px;font-size: 12px;" class="bookmark">
                        <van-icon name="bookmark-o" size="14px" />
                        <span>中国长江集装</span>
                      </span>
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
        <!--经贸统计-->
        <div class="shipping">
          <div class="latestLitle">
            <span>经贸统计</span>
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
                  <div class="shippingNoPic">
                    <div class="newsText">
                      <p>挥洒好傻好熟悉四大法律房间大就能发动机大挥洒好傻好熟悉四大法律房间大就能发动机大</p>
                      <span style="margin-right:20px;font-size: 12px;" class="readNums">
                        <van-icon name="eye-o" size="14px" />
                        <span>1ddc11</span>
                      </span>
                      <span style="margin-right:10px;font-size: 12px;" class="bookmark">
                        <van-icon name="bookmark-o" size="14px" />
                        <span>中国长江集装</span>
                      </span>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <!--水运经济 -->
        <div class="shipping">
          <div class="latestLitle">
            <span>水运经济</span>
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
                  <!-- :class   -->
                  <div class="shippingPic" v-if="true">
                    <div class="newsText">
                      <p>挥洒好傻好熟悉四大法律房间大就能发动机大挥洒好傻好熟悉四大法律房间大就能发动机大</p>
                      <span style="margin-right:10px;font-size: 12px;" class="readNums">
                        <van-icon name="eye-o" size="14px" />
                        <span>1ddc11</span>
                      </span>
                      <span style="margin-right:10px;font-size: 12px;" class="bookmark">
                        <van-icon name="bookmark-o" size="14px" />
                        <span>中国长江集装</span>
                      </span>
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
        <!--综合交通-->
        <div class="shipping">
          <div class="latestLitle">
            <span>经贸统计</span>
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
                  <div class="shippingNoPic">
                    <div class="newsText">
                      <p>挥洒好傻好熟悉四大法律房间大就能发动机大挥洒好傻好熟悉四大法律房间大就能发动机大</p>
                      <span style="margin-right:20px;font-size: 12px;" class="readNums">
                        <van-icon name="eye-o" size="14px" />
                        <span>1ddc11</span>
                      </span>
                      <span style="margin-right:10px;font-size: 12px;" class="bookmark">
                        <van-icon name="bookmark-o" size="14px" />
                        <span>中国长江集装</span>
                      </span>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <!--物流统计-->
        <div class="shipping">
          <div class="latestLitle">
            <span>物流统计</span>
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
                  <div class="shippingNoPic">
                    <div class="newsText">
                      <p>挥洒好傻好熟悉四大法律房间大就能发动机大挥洒好傻好熟悉四大法律房间大就能发动机大</p>
                      <span style="margin-right:20px;font-size: 12px;" class="readNums">
                        <van-icon name="eye-o" size="14px" />
                        <span>1ddc11</span>
                      </span>
                      <span style="margin-right:10px;font-size: 12px;" class="bookmark">
                        <van-icon name="bookmark-o" size="14px" />
                        <span>中国长江集装</span>
                      </span>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "shippingMarket",
  data() {
    return {
      active: 1,
      tabs: ["首页", "集装箱", "干散货", "油轮", "港口", "船舶", "水运"]
    };
  },
  methods: {}
};
</script>
<style lang="less">
</style>
<style lang="less" scoped>
.shippingNoPic {
  padding: 5px 10px;
}
#shippingMarket {
  .header {
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
      //   有图片
      .shippingPic {
        position: relative;
        min-height: 90px;
        padding: 10px 5px;
        padding-right: 90px;
        box-sizing: border-box;

        .newsPic {
          position: absolute;
          top: 5px;
          right: 0;
        }

        img {
          height: 80px;
          width: 80px;
        }
      }
    }
    //  图片新闻
    .newsText {
      p {
        margin-bottom: 5px;
      }
    }
    // 视频
  }
}
</style>
