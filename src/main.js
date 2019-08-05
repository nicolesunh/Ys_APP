import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
// 阿里手淘伸缩布局方案
import 'amfe-flexible';
import './assets/css/global.less'

import { Tab, Tabs,Icon,Swipe, SwipeItem,Row, Col,Grid, GridItem ,image,Switch,Collapse, CollapseItem } from 'vant';
import { Sidebar, SidebarItem } from 'vant';
import { Dialog } from 'vant';
import { Button } from 'vant'
import { Cell, CellGroup } from 'vant';
import { Panel } from 'vant';

Vue.use(Panel);
Vue.use(Cell).use(CellGroup);
Vue.use(Button)

Vue.use(Dialog);

Vue.use(Sidebar);
Vue.use(SidebarItem);
Vue.use(Collapse).use(CollapseItem);
Vue.use(Tab).use(Tabs);
Vue.use(Swipe).use(SwipeItem);
Vue.use(Row).use(Col);
Vue.use(Icon);
Vue.use(image);
Vue.use(Switch);
Vue.use(Grid).use(GridItem);
Vue.config.productionTip = false

// main.js
Vue.prototype.Bus=new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
