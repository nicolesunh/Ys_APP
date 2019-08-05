<template>
  <div class="contentBox" id="infoCentre">
    <div class="main">
      <div class="header">
        <van-tabs background="#fafcff" color="#5aa3e8">
          <van-tab v-for="(item,index) in tabs" :title="item" :key="index"></van-tab>
        </van-tabs>
      </div>
      <div class="content">
        <!--最新资讯 -->
        <div class="onlyNews">
          <div class="latestLitle" v-if="false">
            <span>最新资讯</span>
            <span v-if="false">
              <a href="#">
                <van-icon name="more-o" />
              </a>
            </span>
          </div>
          <div class="news">
            <ul>
              <li v-for="(item,index) in news" :key='index'>
                <a :href="URL" @click="go(item)">{{item.text}}</a>
                <!-- <span @click="go(item)">{{item.text}}</span> -->
              </li>
            </ul>
          </div>
        </div>
        <!--上海 -->
        <div class="onlyNews">
          <div class="latestLitle" v-if="true">
            <span>上海</span>
            <span v-if="true">
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
        <!--视频 -->
        <!-- <div class="videoList">
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
                <div class="videoContent">

                </div>
                <div class="videoVolume">
                  <span style="margin-right:10px;font-size: 12px;" class="readNums">
                    <van-icon name="eye-o" size="14px" />
                    <span>1ddc11</span>
                  </span>
                  <span style="margin-right:10px;font-size: 12px;" class="bookmark">
                    <van-icon name="bookmark-o" size="14px" />
                    <span>中国长江集装</span>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>-->
        <!--今日焦点 -->
        <div class="picNews">
          <div class="latestLitle">
            <span>今日焦点</span>
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
                  <div class="picAndnews" v-if="true">
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
                  <!-- 仅文字新闻 -->
                  <!-- <div class="news">
                    <p>hahahha</p>
                  </div>-->
                </a>
              </li>
            </ul>
          </div>
        </div>
        <!--专栏 -->
        <div class="picNews">
          <div class="latestLitle">
            <span>专栏</span>
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
        <!--热门 -->
        <div class="hotArticle onlyNews">
          <div class="latestLitle">
            <span>热门</span>
          </div>
          <div class="news">
            <ul>
              <li>
                <a href="#">
                  <span>1</span>
                  <span>减肥减肥减肥减肥减肥减肥减肥减肥减肥减肥经济减肥减肥减肥减肥减减肥减肥减肥减肥减法</span>
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
  name: "infoCentreIndex",
  data() {
    return {
      tabs: ["首页", "上海", "国内", "国际", "航运", "经贸", "口岸"],
      URL:'#',
      news:[
        {url:'#/infoDettail',text:'减肥减肥减1',id:1},
        {url:'#/infoDettail',text:'减肥减肥减2',id:2},
      ]
    };
  },
  methods:{
    go(item){
      console.log('item',item);
      this.URL=`#/infoDetail/${item.id}`
      // this.$router.push({path:`/infoDetail/${item.id}`})
    }
  }
};
</script>
<style lang="less">
</style>
<style lang="less" scoped>
#infoCentre {
  .header {
    margin-bottom: 15px;
  }
  .content {
    padding: 5px 10px;
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
