<template>
  <div class="site-footer" fragment="footer-fragment">
    <div class="footer-related">
      <div class="footer-article w1100">
        <dl class="contact clearfix">
          <dt class="fl">
            <i class="iconfont"></i>
          </dt>
          <dd class="fl">
            <p class="text">人工客服</p>
            <p class="tel">400-xxx-xx13</p>
          </dd>
        </dl>
        <dl class="col-article">
          <dt>帮助中心</dt>
          <dd><a rel="nofollow" href="https://gitee.com/Promise-Cheng/mall-project" target="_blank">账户管理</a></dd>
          <dd><a rel="nofollow" href="https://gitee.com/Promise-Cheng/mall-project" target="_blank">购物指南</a></dd>
          <dd><a rel="nofollow" href="https://gitee.com/Promise-Cheng/mall-project" target="_blank">订单操作</a></dd>
        </dl>
        <dl class="col-article">
          <dt>关注我们</dt>
          <dd><a rel="nofollow" href="https://gitee.com/Promise-Cheng/mall-project" target="_blank">新浪微博</a></dd>
          <dd><a rel="nofollow" href="https://gitee.com/Promise-Cheng/mall-project" target="_blank">官方微信</a></dd>
          <dd><a rel="nofollow" href="https://gitee.com/Promise-Cheng/mall-project" target="_blank">联系我们</a></dd>
        </dl>
        <dl class="col-article">
          <dt>线下门店</dt>
          <dd><a rel="nofollow" href="https://gitee.com/Promise-Cheng/mall-project" target="_blank">青木商城</a>
          </dd>
          <dd><a rel="nofollow" href="https://gitee.com/Promise-Cheng/mall-project" target="_blank">服务网点</a></dd>
          <dd><a rel="nofollow" href="https://gitee.com/Promise-Cheng/mall-project" target="_blank">授权体验店</a></dd>
        </dl>
        <dl class="col-article">
          <dt>关于青木</dt>
          <dd><a rel="nofollow" href="https://gitee.com/Promise-Cheng/mall-project" target="_blank">了解青木</a>
          </dd>
          <dd><a rel="nofollow" href="https://gitee.com/Promise-Cheng/mall-project" target="_blank">加入青木</a>
          </dd>
          <dd><a rel="nofollow" href="https://gitee.com/Promise-Cheng/mall-project" target="_blank">捐赠维护</a>
          </dd>
        </dl>
      </div>
      <div class="footer-links w1100">
        <p>友情链接：</p>
        <div class="clearfix">
          <a @click="gotoOtherPage('/frontend/index')">青木商城</a>
          <a @click="gotoOtherPage('/admin/login')">后台管理系统</a>
          <a href="https://github.com/Promise-Cheng/myProject/issues">问题反馈</a>
          <a href="https://github.com/Promise-Cheng/myProject">GitHub 地址</a>
          <a href="https://gitee.com/Promise-Cheng/mall-project">码云Gitee 地址</a>
        </div>
      </div>
      <div class="footer-info w1100">
        <div class="info-text w1100">
          <p><a href="https://gitee.com/Promise-Cheng/mall-project" target="_blank">青木商城 &nbsp; | &nbsp;
            Powered by PromiseTeam&nbsp;
            | &nbsp;</a>
          </p>
          <p><a href="https://gitee.com/Promise-Cheng/mall-project" target="_blank">Copyright © 2020 PromiseTeam All
            Rights
            Reserved.</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Footer",
    methods:{
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
