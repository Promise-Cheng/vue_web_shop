import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Test from '@/components/Footer'
import Base from '@/views/_base/Base'
import store from '@/store'
import * as tips from '@/helper/Tips'
import Frontend from '@/router/frontend'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
    {
      path: '/frontend/',
      name: 'Base',
      component: Base,
      children:[
        ...Frontend,
      ]
    },
    {
      path: '/test',
      name: 'Test',
      component: Test,
    },
  ]
})

router.beforeEach((to, from, next) => {
  const role = sessionStorage.getItem('ms_username');
  // if (!role && to.path !== '/login' && to.path !== '/login_tea' && to.path !== '/register' && to.path !== '/register_tea') {
  // if (!role && (to.path === '/frontend/personal' || to.path === '/frontend/orders'|| to.path === '/frontend/cart')) {
  //   tips.notice2('提示','您还未登录，请先登录！','info');
  //   next('/');
  // }
  // else if(role) {
  //   if (!store.state.isLoaded)
  //     return store.dispatch('getUserInfo');
  //   next();
  // }
  // else {
  //   next();
  // }
  next();
})
export default router;
