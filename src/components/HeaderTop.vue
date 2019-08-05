<template>
  <div>
    <div class="top">
      <span class="logo">
        <van-icon name="logistics" size="16px" />
      </span>
      <span class="title">{{HeaderTopTitle}}</span>
      <span class="search">
        <van-icon name="search" size="18px" />
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: "HeaderTop",
  data() {
    return {
      HeaderTopTitle: "上海国际航运中心"
    };
  },
  // 监听,当路由发生变化的时候执行
  watch: {
    $route(to, from) {
      // 
      let url = to.path;
      switch (url) {
        case "/infoCentreIndex":
          this.HeaderTopTitle = "资讯中心";
          break;
        case "/shippingMarket":
          this.HeaderTopTitle = "航运市场";
          break;
        case "/yangshan":
          this.HeaderTopTitle = "洋山频道";
          break;
        case "/shouce":
          this.HeaderTopTitle = "洋山手册";
          break;
        default:
          this.HeaderTopTitle = "上海国际航运中心";
      }
    }
  },
  created() {}
};
</script>
<style lang='less' scoped>
.top {
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1000;
  padding: 0 20px;
  height: 40px;
  line-height: 40px;
  background: #5aa3e8;
  color: #ffffff;
  .logo {
    float: left;
    padding-top: 3px;
    margin-left: 40px;
    font-size: 14px;
    box-sizing: border-box;
  }
  .title {
    font-size: 18px;
  }
  .search {
    float: right;
    height: 37px;
    padding-top: 3px;
    box-sizing: border-box;
  }
}
</style>


