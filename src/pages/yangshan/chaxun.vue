<template>
  <div class="contentBox" id="chaxun">
    <div class="main">
      <div class="header">
        <van-tabs background="#fafcff" color="#5aa3e8" v-model="active" @click="onClick">
          <van-tab v-for="(item,index) in tabs" :title="item" :key="index" >
            <div class="content" v-if="index==0"> 
               <div class="tab1"><img src="../.././assets/img/ysjx_map.jpg" usemap="#Map">
                  <map name="Map">
                    <!-- 移动端map值未计算 -->
                      <area shape="rect" coords="180,15,405,50" href="http://www.dhybzx.org/OceanPortal/ysssHlangGongyi.action" target="_blank">
                      <area shape="rect" coords="379,187,616,215" href="http://www.dhybzx.org/OceanPortal/pages/yubao/mdhlYuBaoSBGongyi.action" target="_blank">
                      <area shape="rect" coords="327,410,610,437" href="http://www.dhybzx.org/OceanPortal/pages/yubao/hailiubao.html" target="_blank">
                      <area shape="rect" coords="28,381,240,406" href="http://www.dhybzx.org/OceanPortal/pages/yubao/hangxiansd.html" target="_blank">
                      <area shape="rect" coords="0,186,201,219" href="http://www.dhybzx.org/OceanPortal/pages/yubao/hangxianhj.html" target="_blank">
                  </map>
              </div>       
            </div>
            <div class="content" v-else-if="index==1">
               <div class="tianqi" >
                <iframe name="weather_inc" src="http://i.tianqi.com/index.php?c=code&id=57&py=shanghai" width="650" height="427" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>
               </div>
            </div>
            <div class="content" v-else-if="index==2">
              <div class="predict">
                <van-button size="small" type="danger" url="http://www.dhybzx.org/OceanPortal/findHistoryDocWarning.action?type=storm">灾害预警</van-button>
                 <van-button size="small">海浪预报</van-button>
                 <div class="br15">
                  <img class="hailang" width="400px" src="http://www.dhybzx.org/yubao/image/hyybImg/lang.jpg">
                 </div>
              </div>
              <div class="predict">
                 <van-button size="small">潮汐预报</van-button>
                 <div class="br15">
                  <img class="hailang" width="400px" src="http://www.dhybzx.org/yubao/image/tide/cx_00.png">
                 </div>
              </div>
              <div class="predict">
                 <van-button size="small">海流图</van-button>
                 <div class="br15">
                  <img class="hailang" width="400px" src="http://www.dhybzx.org/yubao/image/current/k_00.png">
                 </div>
              </div>
            </div>
            <div class="content" v-else-if="index==3">
                <div class="boxlimit">
                  <iframe name="weather_inc" width="375" height="427" frameborder="0" marginwidth="0" marginheight="0" scrolling="yes" src="http://www.shisc.net/p/yangshan/map.html">
                  </iframe>
                </div>
            </div>
            <div class="content" v-else-if="index==4">
                <div class="boxlimit">
                  <iframe name="weather_inc" width="675" height="427" frameborder="0" marginwidth="0" marginheight="0" scrolling="yes" src="http://www.mapbar.com/so/577b23b3b371bae7238bdcfa.html#c=舟山市&k=洋山深水港&pn=1&rn=10&wf=ls">
                  </iframe>
                </div>
            </div>
          </van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "chaxun",
  data() {
    return {
      activeNames:[''],
      active:'0',
      activeKey:0,
      tabs: ["精细化预报", "洋山天气", "洋山海况", "大桥交通", "地图实况", "靠港计划"]
    };
  },
  created(){
    this.active=this.$route.query.id-1;
    console.log(this.active)

  },
  methods:{
    onClick(title) {
      if (title=='5')
       window.location.href="http://www.dhybzx.org/OceanPortal/findHistoryDocWarning.action?type=storm";
    }
  }
  
};
</script>
<style lang="less">
</style>
<style lang="less" scoped>
#contentBox {
  .header {
    margin-bottom: 15px;
  }
  .content {
    padding: 5px 10px;
    //  图片详情
     
      h4 {
        margin-bottom: 8px;
        font-size: 16px;
      }
      h2 {
        margin-bottom: 8px;
        font-size: 24px;
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
}
.tab1 img{
        width: 80%;
        height: 80%;
}
.predict{
  margin-top: 30px;
  margin-bottom: 15px;

}
.br15{
  padding-top: 15px;
}
</style>
