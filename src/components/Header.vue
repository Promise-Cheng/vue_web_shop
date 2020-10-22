<template>
  <div>
    <nav id="nav" fragment="nav-fragment">
      <div class="banner_x center">
        <a href="@{/index}" class="logo"><h1>新蜂商城</h1></a>
        <a href="@{/index}" class="gif"></a>
        <ul class="list">
          <li><a href="##">秒杀</a></li>
          <li><a href="##">优惠券</a></li>
        </ul>
        <div class="fr">
          <div class="search">
            <input class="text" type="text" id="keyword" autocomplete="off">
            <div class="search_hot">
            </div>
          </div>
          <div class="button iconfont icon-search" onclick="search()"></div>
        </div>
      </div>
    </nav>
    <header id="header" fragment="header-fragment">
      <div class="center">
        <ul class="fl">
          <li><a href="@{/index}">新蜂商城</a></li>
          <li><a href="@{/admin}">后台管理系统</a></li>
        </ul>
        <div class="fr">
          <template v-if="!$store.state.isLoaded">
            <div class="user">
              <ul class="selector">
                <li>
                  <a @click="gotoOtherPage('/personal')">
                    个人中心
                  </a>
                </li>
                <li>
                  <a @click="gotoOtherPage('/orders')">
                    我的订单
                  </a>
                </li>
                <li>
                  <a @click="gotoOtherPage('/logout')">
                    退出登录
                  </a>
                </li>
              </ul>
              <a href="##" class="username">
                {{ $store.state.user.nickName}}
                <a-icon type="down-circle" />
              </a>
            </div>
            <div class="shopcart">
              <a @click="gotoOtherPage('/cart')" style="color: white;">
                <a-icon type="shopping-cart"/>
                购物车(
                {{ $store.state.user.shopCartItemCount}}
                )</a>
            </div>
          </template>
          <template v-else>
            <ul class="login">
              <li><a @click="gotoOtherPage('/')">登录</a></li>
              <li><a @click="gotoOtherPage('/register')">注册</a></li>
            </ul>
            <div class="shopcart">
              <a @click="gotoOtherPage('/cart')" style="color: white;">
                <a-icon type="shopping-cart"/>
                购物车(0)</a>
            </div>
          </template>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
  export default {
    name: "Header",
    methods: {
      gotoOtherPage(path) {
        this.$router.push({
          path: path,
        })
      }
    }
  }
</script>

<style scoped>
  @import "../assets/css/mall/common.css";
  @import "../assets/css/mall/styles/login.css";
  @import "../assets/css/mall/iconfont.css";
  @import "../assets/css/mall/swiper.min.css";
  @import "../assets/css/mall/styles/header.css";
  @import "../assets/css/admin/plugins/sweetalert/sweetalert.css";
</style>
