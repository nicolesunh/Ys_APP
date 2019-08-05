import Vue from "vue";
import Router from "vue-router";

const home = () => import("@/pages/home/home"); //首页
const infoCentreIndex = () => import("@/pages/infoCentre/infoCentreIndex"); //资讯中心

const infoDetail = () => import("@/pages/infoCentre/infoDetail"); //资讯中心详情
const shippingMarket = () => import("@/pages/shippingMarket/shippingMarket"); //航运市场
const yangshan = () => import("@/pages/yangshan/yangshan"); //洋山频道
const shouce = () => import("@/pages/yangshan/shouce"); //洋山频道手册详情
const chaxun = () => import("@/pages/yangshan/chaxun"); //洋山频道手册详情

Vue.use(Router);

export default new Router({
  routes: [{
      path: "/",
      name: "home",
      component: home
    },
    {
      path: "/infoCentreIndex",
      name: "infoCentreIndex",
      component: infoCentreIndex
    },
    {
      path: "/infoDetail/:id(\\d+)",
      name: "infoDetail",
      component: infoDetail
    },
    {
      path: "/shippingMarket",
      name: "shippingMarket",
      component: shippingMarket
    },
    {
      path: "/yangshan",
      name: "yangshan",
      component: yangshan
    },
    {
      path: "/shouce",
      name: "shouce",
      component: shouce
    },
    {
      path: "/chaxun",
      name: "chaxun",
      component: chaxun
    },
  ]
});