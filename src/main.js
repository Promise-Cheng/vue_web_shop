// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import { notification,Input,Icon } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import store from './store'

import App from './App'

Vue.config.productionTip = false;
Vue.prototype.$notification = notification;
Vue.use(Input);
Vue.use(Icon);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
