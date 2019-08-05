<template>
  <div class="contentBox" id="shouce">
    <div class="main">
      <div class="header">
        <van-tabs background="#fafcff" color="#5aa3e8" v-model="active">
          <van-tab v-for="(item,index) in tabs" :title="item" :key="index">
            <div class="content" v-if="index==0">
              <div class="imgShow">
                <van-collapse v-model="activeNames" accordion>
                  <van-collapse-item title="上海口岸管理单位一览表" name="1">
                    <img src="http://www.shisc.net/p/yangshan/images/yilan.png" alt="">
                  </van-collapse-item>
                  <van-collapse-item title="上海组合港及港航行业协会一览表" name="2">
                    <img src="http://www.shisc.net/p/yangshan/images/xiehui.png" alt="">
                  </van-collapse-item>
                  <van-collapse-item title="驻洋山港区主要单位一览表" name="3">
                    <img src="http://www.shisc.net/p/yangshan/images/danwei.png" alt="">
                  </van-collapse-item>
                    <van-collapse-item title="上海国际港务(集团)有限公司公用码头一览表" name="4">
                    <img src="http://www.shisc.net/p/yangshan/images/shanggang.png" alt="">
                  </van-collapse-item>
                  <van-collapse-item title="上海港口危险货物作业单位名单" name="5">
                    <img src="http://www.shisc.net/p/yangshan/images/weixian.png" alt="">
                  </van-collapse-item>
                  <van-collapse-item title="其他港航相关企事业单位一览表" name="6">
                    <img src="http://www.shisc.net/p/yangshan/images/qita.png" alt="">
                  </van-collapse-item>
                </van-collapse>
              </div>               
            </div>
            <div class="content" v-else-if="index==1">
              <div class="imgShow">
                <van-collapse v-model="activeNames" accordion>
                  <van-collapse-item title="一期码头概况" name="1">
                    <img src="http://www.shisc.net/p/yangshan/images/dili.png" alt="">
                  </van-collapse-item>
                  <van-collapse-item title="二期码头概况" name="2">
                    <p> 
                     <span>为充分发挥洋山深水港区的综合规模效益，进一步加快上海国际航运中心的建设步伐，在洋山深水港一期港区顺利投产的基础上，根据国家有关批复精神和上海市委、市府有关“二期工程于2006年底前建成投产”的要求，市深水港工程建设指挥部、上海同盛投资（集团）有限公司抓紧组织建设二期工程。
                            <br> 经过广大建设者两年多的艰苦努力、通力协作，二期工程已于2006年10月底全面建成较计划提前一个月交付生产准备，为二期工程将于12月10日投入试生产奠定了基础。<br>
                            洋山深水港区二期工程位于小洋山岛南侧的水域，建设4个集装箱专用泊位，码头岸线 1400米，陆域总面积约88.83万平方米，16台载荷60吨的桥吊（其中双40英尺桥吊13台）设计集装箱年吞吐量210万TEU。<br>
                            洋山1号2号码头将合并运作，形成码头岸线全长3000米，配备9个集装箱深水泊位，设计年吞吐量达到430万TEU。</span></p>
                  </van-collapse-item>
                </van-collapse>
              </div>
            </div>
            <div class="content" v-else-if="index==2">
              <div class="imgShow">
                <van-collapse v-model="activeNames">
                  <van-collapse-item title="洋山一期运作服务指南" name="1">
                    <div class="showDetail">
                      <div class="imgShow_1">
                        <van-collapse v-model="activeNames">
                          <van-collapse-item title="1.上海盛东国际集装箱码头有限公司业务运作模式" name="3">
                            <img src="http://www.shisc.net/p/yangshan/images/shengdong.png" alt="">
                          </van-collapse-item>
                          <van-collapse-item title="2.洋山港区集装箱的集疏作业方式" name="4">
                            <img src="http://www.shisc.net/p/yangshan/images/zuoye.png" alt="">
                          </van-collapse-item>
                          <van-collapse-item title="3.洋山港区海关，国检监管，海事管理" name="5">
                            <img src="http://www.shisc.net/p/yangshan/images/haiguan.png" alt="">
                          </van-collapse-item>
                          <van-collapse-item title="4.洋山港区班轮安排原则" name="6">
                             <div class="jumbotron">
                                <p class="text-left">
                                  1. 充分利用洋山港区深水岸线资源，满足集装箱船舶大型化趋势对枢纽港的需求；<br>

                                  2. 充分尊重船公司的意见，在同相关船公司具体协商，取得共识的基础上，制定班轮安排方案；<br>

                                  3. 有利于发挥班轮公司在推动水水转运业务中的重要作用，促进国际中转和沿海，长江内支线中转业务的发展；<br>

                                  4. 有利于洋山港区在投入营运初期顺利形成生产规模，迅速发挥码头的产生能力。<br>
                                </p>
                              </div>   
                          </van-collapse-item>
                          <van-collapse-item title="5.洋山港区费收标准" name="7">
                            <div class="jumbotron">
                              <p class="text-left">
                                洋山港区费收标准
                                一、货物港务费，港口建设费<br>
                                洋山港区码头按照交通部颁布的规定计收货物港务费及货物港口建设费。<br>
                                二、船舶引航费<br>
                                1. 洋山码头引航费<br>
                                洋山港区引航锚地距离洋山码头约 16 海里 ，按照交通部颁布的引航费计收办法：基本引航费为 0.53 元 / 净吨<br>
                                2. 实施二靠的引航费<br>
                                船舶从外高桥移至洋山码头，或从洋山移至外高桥码头，按部颁发规定 0.22 元 / 净吨计收移泊费。<br>
                                三、拖轮包干费<br>
                                1. 洋山码头拖轮包干费<br>
                                洋山港区外轮，地方船拖轮包干费率表 单位：元<br>
                                <img src="http://www.shisc.net/p/yangshan/images/yssc_24.gif"><br>
                                2. 实施二靠的拖轮包干费<br>
                                船舶从外高桥移至洋山码头，或从洋山移至外高桥码头，第一次靠泊的码头按规定费率计收；第二次靠泊的码头按规定标准的 70% 计收。<br>
                                四、停泊费，系解缆费<br>
                                1. 洋山码头停泊费，系解缆费<br>
                                靠泊洋山码头的船舶发生的停泊费，系解缆费，按交通部颁布的规定计收。<br>
                                2. 实施二靠的停泊费，系解缆费<br>
                                船舶从外高桥移至洋山码头，或从洋山移至外高桥码头，第一次靠泊的码头按规定计收停泊费；第二次靠泊的码头按部颁布标准的 70% 计收。<br>
                                五、船舶其他使费<br>
                                洋山码头发生的开关舱费，供水费，供水劳务费，船舶杂项作业费等，统一按交通部颁布的《港口费收规则》的相关规定执行。<br>
                                六、 集装箱装卸包干费<br>
                                洋山码头集装箱装卸包干费按照交通部颁布的包干费标准计收：<br>
                                洋山港区一期码头装卸包干费率表 单位：元<br>
                                <img src="http://www.shisc.net/p/yangshan/images/yssc_25.gif"><br>
                                七、集装箱中转包干费<br>
                                1、洋山港区集装箱中转包干费率<br>
                                经洋山港区码头中转的沿海、长江、国际中转集装箱，按以下标准计收中转包干费：<br>
                                <img src="http://www.shisc.net/p/yangshan/images/fei.png"><br>
                                2、互转国际中转箱中转包干费计收<br>
                                国际中转箱在洋山与外高桥码头之间互转，洋山及外高桥码头分别按以上费率标准的50%计收中转包干费。<br>
                                3、互转国际中转箱驳运包干费<br>
                                国际中转箱由“穿梭巴士”完成洋山与外高桥码头之间的驳运，按以下标准计收“穿梭巴士”驳运包干费：<br>
                                <img src="http://www.shisc.net/p/yangshan/images/fei2.png"><br>
                                4、以上驳运包干费全部作运费支付“穿梭巴士”承运人，码头装卸费免收。<br>
                                二、沿海、长江中转集装箱发生的“穿梭巴士”驳运包干费仍按沪港务业发[2005]0448号文件规定的标准计收。<br>
                                三、集装箱换船装卸费<br>
                                由于调换承运船舶而发生的集装箱装卸，所有码头均按上述“洋山港区集装箱中转包干费率表”的标准计收包干费。<br>
                                八、外高桥“专用码头”换装，驳运包干费<br>
                                长江内支线与“穿梭巴士”靠泊外高桥“专用码头”，进行中转箱的换装，以及外高桥港区与洋山港区之间的驳运总包干费为： 350.00 元 / 20 ' 575.00 元 / 40 '<br>
                                九、跨海大桥集卡驳运费<br>
                                遇有特殊情况，需采用集卡完成集装箱在芦潮港辅助园区与洋山码头之间的驳运，按以下标准计收集卡驳运费，免上下车费。 180.00 元 / 20 ' 360.00 元 / 40 '<br>
                                十、外高桥至洋山码头集驳运费<br>
                                外高桥码头至洋山码头的中转箱采用集卡驳运，按以下标准计收驳运费： 500.00 元 / 20 ' 750.00 元 / 40 '<br>
                                十一、集装箱疏港费<br>
                                洋山码头集装箱疏港包干费计收标准按现行标准执行。<br>
                                十二、集装箱理货费<br>
                                洋山港区集装箱理货费，由外轮理货公司与各船公司签定的相关协议计收。<br>
                                十三、洋山港区其他费收<br>
                                洋山港区发生的堆存费，查验服务费，喷淋降温费，制冷费，搬移费，上下车费等，均按上海国际港务集团现行的相关规定执行。<br>
                              </p>
                            </div>
                          </van-collapse-item>
                          <van-collapse-item title="6.外来集卡进港须知" name="8">
                            <div class="jumbotron">
                              <h2>外来集卡进港须知</h2>
                              <p class="text-left">
                                1.车辆进港必须遵守交通法规,服从交通民警和现场管理人员的指挥.<br>
                                2.车辆进港前驾驶员需解开平板锁钮.与作业无关人员不要随车进入港区.进入箱区后,驾驶员需在驾驶室内等候交收箱,不要擅自下车.<br>
                                3.车辆进港前请安装火星熄灭器,港内道路限速35公里/小时.进出大门、道口、拆装箱场、停车场、交叉路口或视线不清时,限速5公里/小时.不准超速行驶.<br>
                                4.请按照道路标志标线行驶,不准擅自驶入码头平台,不要擅自进入危险品箱区.驶出箱区通道请右转,不要横穿道路直行.<br>
                                5.码头装卸器械具有优先行驶权,请主动避让,避免碰撞.外来集卡因挡道、抢道、占道、压线导致与码头轮胎吊碰撞,要承担一切责任.<br>
                                6.完成作业请立即驶离港区,不准在港区内逗留和过夜.<br>
                                7.车辆在港区内发生事故,请保护好现场,及时通知交通民警,等待处理.<br>
                                8.驾驶员要文明驾驶,不要乱鸣号,请不要将各类杂物抛弃在港区内,港区内禁止吸烟.<br>
                              </p>
                            </div>
                          </van-collapse-item>
                        </van-collapse>
                      </div>             
                    </div>
                  </van-collapse-item>
                  <van-collapse-item title="洋山一期二期合并运作指南" name="2">
                      <div class="showDetail">
                        <div class="imgShow">
                          <van-collapse v-model="activeNames">
                            <van-collapse-item title="1.服务导航" name="9">
                              <img src="http://www.shisc.net/p/yangshan/images/daohang.png" alt="">
                            </van-collapse-item>
                            <van-collapse-item title="2.主要业务流程" name="10">
                              <img src="http://www.shisc.net/p/yangshan/images/liucheng.png" alt="">
                            </van-collapse-item>
                            <van-collapse-item title="3.交通安全需知" name="11">
                              <img src="http://www.shisc.net/p/yangshan/images/anquan.png" alt="">
                            </van-collapse-item>
                            <van-collapse-item title="4.主要岗位服务范围" name="12">
                              <img src="http://www.shisc.net/p/yangshan/images/gangwei.png" alt="">
                            </van-collapse-item>
                            <van-collapse-item title="5.相关岗位联系电话" name="13">
                              <img src="http://www.shisc.net/p/yangshan/images/ganglian.png" alt="">
                            </van-collapse-item>
                            <van-collapse-item title="6.集装箱费率表" name="14">
                              <img src="http://www.shisc.net/p/yangshan/images/feilv.png" alt="">
                            </van-collapse-item>
                      
                          
                            
                          </van-collapse>
                        </div>             
                    </div>
                  </van-collapse-item>
                </van-collapse>
              </div>               
            </div>
            <div class="content" v-else-if="index==3">
              <div class="list-group">
                  <a  href="./yijian.docx" download="./yijian.docx" class=" list-group-item">
                    关于优化洋山保税港区通关环境的若干意见
                  </a>
                  <a  href="./yijian.docx" download="./yijian.docx" class=" list-group-item">
                      办理检验检疫手续须知
                  </a>
                  <a href="./xuzhi.docx" download="./xuzhi.docx" class=" list-group-item">
                      办理边防检查手续须知
                  </a>
                  <a  href="./kouan.docx" download="./kouan.docx" class=" list-group-item">
                      海事局洋山港口岸管理须知
                  </a>
                  <a href="./shenshui.docx" download="./shenshui.docx" class=" list-group-item">
                      洋山深水港区码头服务指南
                  </a>
                  <a href="./fujian.docx" download="./fujian.docx" class=" list-group-item">
                      附件
                  </a>
              </div>
            </div>
            <div class="content" v-else-if="index==4">
              <div class="jumbotron">
                <h2>洋 山 客 运</h2>
                <p class="text-left">洋山客运现有往返浙江三江、岱山、衢山、大洋方向的航班，旅客可到南浦大桥下上海旅游集散中心通过车船联运乘坐，或到地铁龙阳路站搭乘龙港专线到洋山客运站。</p>
                <p class="text-left">
                  咨询电话：<br>
                  南浦旅游集散中心问讯处:33760978<br>
                  洋山客运站:68287095<br>
                  洋山专线:68022000<br>
                  吴淞客运中心:56575500<br>
                </p>
                <p>
                <img src="http://www.shisc.net/p/yangshan/images/biaoge.png">
                </p>
              </div>
            </div>
            <div class="content" v-else-if="index==5">
              <div class="jumbotron">
                <h2>大 桥 办 证</h2>
                <p class="text-left">
                  一、对因工作需要进港车辆，提供24小时办证服务（9:15分～16:30分在顺通路海关大楼101室办理、15:30～9:15分在东海大桥收费口现场办理）。<br>
                  二、东海大桥通行证免费办理。<br>
                  三、通过东海大桥去车客渡的车辆，在大桥入口处办理车客渡码头专用通行证。<br>
                  四、任何买卖东海大桥通行证都属违法行为。<br>
                  五、需要资讯办理东海大桥临时通行证者，请至顺通路海关大楼101室。<br>
                  六、资询电话：68281661
                </p>
                <p class="text-left">
                  <img src="http://www.shisc.net/p/yangshan/images/bz_pic.gif">
                </p>
                <h2>东海大桥服务承诺</h2>
                <p class="text-left">
                  一、全年无休，24小时办理通行证，举止端庄，语言规范；<br>
                  二、设备，设施综合完好率达98%；<br>
                  三、桥面机械化清扫不扬尘，雨后24小时无坑塘，无黄泥带，路面完好率99%；<br>
                  四、收费口8秒种出票；<br>
                  五、事故牵引车接警后，1分钟出车，7分钟到位；<br>
                  六、灾害性天气警报5分钟发布，30分钟到位实施抢险；<br>
                  七、监督投诉电话：68281211，58282805，24小时接听。有责投诉为零。<br>
                </p>
                <h2>大 桥 收 费</h2>
                <p>
                  <img src="http://www.shisc.net/p/yangshan/images/shoufei.png">
                </p>
              </div>
            </div>
            <div class="content" v-else-if="index==6">
              <div class="jumbotron">
                <h2>公 交 信 息</h2>
                <p class="text-left">
                  公交专线<br>
                  上海南汇大众公交客运有限公司<br>
                  开辟三条专线：龙港快线、洋山专线、龙临线<br>
                  服务热线：68022000<br>
                </p>
                <h2 class="text-left">班车时刻</h2>
                <p class="text-left">
                  <img src="http://www.shisc.net/p/yangshan/images/gongjiao.png">
                </p>
                <p class="text-left">
                <img src="http://www.shisc.net/p/yangshan/images/gongjiao2.png">
                  </p>
                <p class="text-left">
                  <img src="http://www.shisc.net/p/yangshan/images/gongjiao3.png">
                </p>
                <p class="text-left">
                  <img src="http://www.shisc.net/p/yangshan/images/gongjiao4.png">
                </p>
              </div>
            </div> 
            <div class="content" v-else-if="index==7">
              <div class="ysgg">
                <h2>洋 山 观 光</h2>
                <p class="text-left">
                        上海旅游集散中心、上海工业旅游促进中心、南汇旅游服务中心三家洋山游指定接待单位接受团队和散客预约报名。洋山深水港旅游的总人数每天不超过1500人，即三家单位每天各办理500人以内预约。其中从上海市区出发的游客为60元/人，从临港新城出发为35元/人。<br>
                  　　 根据从市区出发和从临港新城出发两种情况，洋山游的线路安排也略有不同。从上海市区出发的游客将依次游览临港新城、东海大桥、洋山深水港观景台，全程大约4小时；从临港新城出发的游客，则将直接前往东海大桥和洋山深水港观景台两个景点，全程大约1个半小时至2小时。此外，游客可在临港新城参观洋山深水港建设成就展示馆，旅游观光开放时间为每天8:30－16:30。<br>
                  　　 在确保港口正常运营的前提下，目前阶段洋山深水港旅游观光按照预约接待、定量定时、指定游线、公开价格方式进行，并对旅游车辆、司导人员、游客及应急预案实施全面管理。同时，洋山深水港只对预约游客开放，上述三家指定接待单位接受市民、游客和单位预约并组织成团。市旅游委和洋山保税港区管委会对洋山深水港旅游观光进行监督管理，对违规操作、因服务质量引发游客投诉的单位将分别采取警告、通报，直至取消指定服务单位资格的处理。</p>
                <p class="text-left">
                  <img src="http://www.shisc.net/p/yangshan/images/guan.png">
                </p>
              </div>
            </div>
            <div class="content" v-else-if="index==8">
                <div class="xc">
                  <div class="xcmap" >
                        <div>
                          <p>
                            <img src="http://www.shisc.net/p/yangshan/images/map_mini.gif">
                          </p>
                        </div>
                      </div>
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
  name: "shouce",
  data() {
    return {
      activeNames:[''],
      active:'0',
      tabs: ["单位名录", "码头概况", "业务介绍", "操作指南", "洋山客运", "大桥通行", "公交信息","洋山观光", "行车地图"]
    };
  },
  created(){
    this.active=this.$route.query.d-1;
    console.log(this.active)
  },
  methods:{
   
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
    .main {
      padding-bottom: 10px;
      box-sizing: border-box;
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
}
.imgShow{
  img{
    width: 100%;
    height: 100%;
  }
}
.list-group-item:first-child {
    border-top-right-radius: 3px;
    border-top-left-radius: 3px;
}
.list-group-item {
    position: relative;
    display: block;
    padding: 10px 15px;
    margin-bottom: -1px;
    background-color: #ffffff;
    border: 1px solid #dddddd;
}
.text-left {
  padding: 5px 10px;
  text-align: left;
}
.imgShow_1{
  text-align: left;
}
</style>
