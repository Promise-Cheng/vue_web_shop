import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Test from '@/components/Footer'
import store from '@/store'
import * as tips from '@/helper/Tips'

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
      path: '/test',
      name: 'Test',
      component: Test,
    },
  ]
})

router.beforeEach((to, from, next) => {
  const role = sessionStorage.getItem('ms_username');
  // if (!role && to.path !== '/login' && to.path !== '/login_tea' && to.path !== '/register' && to.path !== '/register_tea') {
  if (!role && (to.path === '/personal' || to.path === '/orders'|| to.path === '/cart')) {
    tips.notice2('提示','您还未登录，请先登录！','info');
    next('/');
  }
  else if(role) {
    if (!store.state.isLoaded)
      return store.dispatch('getUserInfo');
    next();
  }
  else {
    next();
  }
})
export default router;
