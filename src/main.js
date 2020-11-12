// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import { notification,Input,Icon,Carousel,Table,Modal,Button,Form,Upload } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import './assets/css/mall/common.css';
import lodash from 'lodash'
import store from './store'
import { prefix } from '@/helper/utils.js'

import App from './App'

Vue.prototype.prefix = prefix;
Vue.config.productionTip = false;
Vue.prototype.$notification = notification;
Vue.use(Upload);
Vue.use(Form);
Vue.use(Button);
Vue.use(Input);
Vue.use(Modal);
Vue.use(Icon);
Vue.use(Carousel);
Vue.use(Table);
Vue.use(lodash);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
