<template>
  <div>
    <header id="header" fragment="header-fragment">
      <div class="center">
        <ul class="fl">
          <li>
            <a @click="gotoOtherPage('/frontend/index')">新蜂商城</a>
          </li>
          <li>
            <a @click="gotoOtherPage('/admin')">后台管理系统</a>
          </li>
        </ul>
        <div class="fr">
          <template v-if="isLogin">
            <div class="user">
              <ul class="selector">
                <li>
                  <a @click="gotoOtherPage('/frontend/personal')">个人中心</a>
                </li>
                <li>
                  <a @click="gotoOtherPage('/frontend/orders')">我的订单</a>
                </li>
                <li>
                  <a @click="loginOut()">退出登录</a>
                </li>
              </ul>
              <a href="##" class="username">
                {{ user.nickName}}
                <a-icon type="down-circle" />
              </a>
            </div>
            <div class="shopcart">
              <a @click="gotoOtherPage('/frontend/cart')" style="color: white;">
                <a-icon type="shopping-cart" />购物车(
                0
                )
              </a>
            </div>
          </template>
          <template v-else>
            <ul class="login">
              <li>
                <a @click="gotoOtherPage('/')">登录</a>
              </li>
              <li>
                <a @click="gotoOtherPage('/frontend/register')">注册</a>
              </li>
            </ul>
            <div class="shopcart">
              <a @click="gotoOtherPage('/frontend/cart')" style="color: white;">
                <a-icon type="shopping-cart" />
                购物车({{ cart.length }})
              </a>
            </div>
          </template>
        </div>
      </div>
    </header>
    <nav id="nav" fragment="nav-fragment">
      <div class="banner_x center">
        <a @click="gotoOtherPage('/frontend/index')" class="logo">
          <h1>新蜂商城</h1>
        </a>
        <a @click="gotoOtherPage('/frontend/index')" class="gif"></a>
        <ul class="list">
          <!-- <li>
            <a href="##">秒杀</a>
          </li>
          <li>
            <a href="##">优惠券</a>
          </li>-->
        </ul>
        <div class="fr">
          <div class="search">
            <input class="text" type="text" v-model="keyword" autocomplete="off" />
            <div class="search_hot"></div>
          </div>
          <div class="button iconfont icon-search" @click="search"></div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import * as api from "@/api/api";

export default {
  name: "Header",
  data() {
    return {
      keyword:'',
      user: {},
      cart: []
    };
  },
  computed: {
    isLogin() {
      return !!localStorage.getItem("token");
    }
  },
  mounted() {
    if (this.isLogin) {
      api.user.getUserInfo().then(res => {
        this.user = res.data;
      });
      api.cart.getData().then(res => {
        this.cart = res.data;
      });
    }
  },
  methods: {
    search(){
      if(this.$route.path === '/frontend/search')
        this.$router.push({
          path:'/frontend/search',
          query:{
            keyword:this.keyword,
          },
        })
      else{
        this.$router.replace(
          {
            path:'/frontend/search',
            query:{
              keyword:this.keyword,
            },
          }
        )
      }
    },
    gotoOtherPage(path) {
      this.$router.push({
        path: path
      });
    },
    loginOut() {
      api.index.logout().then(res => {
        localStorage.setItem("token", "");
        this.$router.replace({
          path: "/"
        });
      });
    }
  }
};
</script>

<style scoped>
@import "../assets/css/mall/common.css";
@import "../assets/css/mall/styles/login.css";
@import "../assets/css/mall/iconfont.css";
@import "../assets/css/mall/swiper.min.css";
@import "../assets/css/mall/styles/header.css";
@import "../assets/css/admin/plugins/sweetalert/sweetalert.css";
</style>
