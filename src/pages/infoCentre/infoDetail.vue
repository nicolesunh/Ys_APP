<template>
  <div class="contentBox" id="infoDetail">
    <div class="main">
      <div class="header">
        <van-tabs background="#fafcff" color="#5aa3e8" v-model="active">
          <van-tab v-for="(item,index) in tabs" :title="item" :key="index"></van-tab>
        </van-tabs>
      </div>
      <div class="content">
        <div class="detailTitle">
          <h4>商务部外贸司负责人解读稳外贸政策措施</h4>
          <p>
            <span>2019-07-25 14:34:02</span>
            <span>
              <van-icon name="chat" />
            </span>
            <a href="http://www.mofcom.gov.cn/article/ae/sjjd/201907/20190702884021.shtml">商务部官网</a>
          </p>
        </div>
        <div class="detailContent">
          <div class="detailTop">
            <div class="detailReadNum">
              <span class="readNums">
                <van-icon name="eye-o" />12
              </span>
              <span class="comment">
                <van-icon name="comment-circle-o" />12
              </span>
            </div>
            <!-- 微信分享 -->
            <div class="topShare">
              <span>
                <van-icon name="eye-o" />12
              </span>
              <span >
                <van-icon name="comment-circle-o" />12
              </span>
            </div>
          </div>
          <div class="detail">
            <span>国务院总理李克强7月10日主持召开国务院常务会议，确定进一步稳外贸措施，以扩大开放助力稳增长、稳就业。会议指出，落实稳外贸要求，关键是要进一步扩大对外开放，更加注重以市场化改革和运用经济手段增强企业内生动力。商务部外贸司负责人就政策措施的出台背景、主要内容进行了解读。</span>
          </div>
          <div class="detailBottom">
            <div class="detailReadNum">
              <span class="bookmark">
                <van-icon name="bookmark-o" />
              </span>
            </div>
             <!-- 微信分享 -->
            <div class="topShare">
              <span class="readNums">
                <van-icon name="eye-o" />12
              </span>
              <span>
                <van-icon name="comment-circle-o" />12
              </span>
            </div>
          </div>
        </div>
        <!-- 综合交通 -->
        <div class="onlyNews extendedReading">
          <div class="latestLitle">
            <span>延伸阅读</span>
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
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "infoDetail",
  data() {
    return {
      active: 1,
      tabs: ["首页", "上海", "国内", "国际", "航运", "经贸", "口岸"]
    };
  }
};
</script>
<style lang="less">
</style>
<style lang="less" scoped>
#infoDetail {
  .header {
    margin-bottom: 15px;
  }
  .content {
    padding: 5px 10px;
    //  图片详情
    .detailTitle {
      padding-bottom: 10px;

      box-sizing: border-box;
      h4 {
        margin-bottom: 8px;
        font-size: 16px;
      }
      p {
        font-size: 12px;
        color: #999;
        span {
          &:first-child {
            margin-right: 15px;
          }
        }

        a {
          display: inline-block;
          color: #999;
        }
      }
    }
    .detailContent {
      padding: 15px 0;
      border-top: 1px solid #eee;
      border-bottom: 1px solid #eee;
      box-sizing: border-box;
      .detailTop,
      .detailBottom {
        padding-bottom: 5px;
        box-sizing: border-box;
        overflow: hidden;
        color: #999;
        .detailReadNum {
          float: left;
          margin-left: 10px;
          font-size: 12px;
          span {
            &:first-child {
              margin-right: 10px;
            }
          }
        }
        .topShare {
          float: right;
          margin-right: 10px;
          font-size: 12px;
        }
      }

      .detail {
        text-align: left;
        text-indent: 2em;
        padding: 5px 5px;
        margin-bottom: 10px;
        box-sizing: border-box;
      }
    }
    .extendedReading{
        margin-top: 20px;
        text-align: left;
        .latestLitle{
            border-bottom: none;
        }
    }
  }
}
</style>
