<template>
  <div>
    <div class="footer">
      <van-row>
        <van-col span="8">
          <a class="index">
            <div>
              <van-icon name="wap-home" size="16px" />
            </div>
            <div>
              <span>网站首页</span>
            </div>
          </a>
        </van-col>
        <van-col span="8">
          <a class="person">
            <div>
              <van-icon name="user-o" size="16px" />
            </div>
            <div>
              <span>用户中心</span>
            </div>
          </a>
        </van-col>
        <van-col span="8">
          <a class="friends">
            <div>
              <van-icon name="friends-o" size="16px" />
            </div>
            <div>
              <span>友情链接</span>
            </div>
          </a>
        </van-col>
      </van-row>
    </div>
  </div>
</template>
<script>
export default {
  name: "FooterBottom",
  data() {
    return {};
  },
  props:['topTitle'],

};
</script>
<style lang='less' scoped>
.footer {
  width: 100%;
  position: fixed;
  bottom:0 ;
  right: 0;
  z-index: 1000;
  padding: 3px 10px;
  background: #5aa3e8;
  // height: 50px;
  box-sizing: border-box;
  a {
    float: left;
    width: 100%;
    color: #ffffff;
    font-size: 12px;
    text-align: center;
  }
}
</style>


