<template>
    <div>
        <!-- Left navbar links -->
      <nav class="main-header navbar navbar-expand bg-white navbar-light border-bottom">
        <ul class="navbar-nav">
          <li class="nav-item d-none d-sm-inline-block">
            <a href="/admin/index" class="nav-link">Dashboard</a>
          </li>
        </ul>
        <!-- Right navbar links -->
        <ul class="navbar-nav ml-auto">
          <li class="nav-item dropdown">
            <a class="nav-link" href="/">
              <i class="fa fa-paper-plane">&nbsp;&nbsp;newbee-mall首页</i>
            </a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link" data-toggle="dropdown" href="#">
              <i class="fa fa-user">&nbsp;&nbsp;作者</i>
            </a>
            <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              <div class="dropdown-divider"></div>
              <a href="#" class="dropdown-item">
                <i class="fa fa-user-o mr-2"></i> 姓名
                <span class="float-right text-muted text-sm">十三 / 13</span>
              </a>
              <div class="dropdown-divider"></div>
              <a href="#" class="dropdown-item">
                <i class="fa fa-user-secret mr-2"></i> 身份
                <span class="float-right text-muted text-sm">Java开发工程师</span>
              </a>
              <div class="dropdown-divider"></div>
              <a href="#" class="dropdown-item">
                <i class="fa fa-address-card mr-2"></i> 邮箱
                <span class="float-right text-muted text-sm">2449207463@qq.com</span>
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </div>
</template>

<script>
    import WebHeader from "@/components/Header";
    export default {
        name: "AdminHeader",
      components: {WebHeader},
      computed: {
        isLogin() {
          return this.$store.state.isLoaded;
        }
      },
      methods: {
        gotoOtherPage(path) {
          this.$router.push({
            path: path
          });
        },
      }
    }
</script>

<style scoped>
  /*@import "../assets/css/admin/dist/css/ionicons.min.css";*/
  @import "../assets/css/admin/dist/css/main.css";
  @import "../assets/css/admin/dist/css/adminlte.css";
  @import "../assets/css/admin/dist/css/adminlte.min.css";
  @import "../assets/css/admin/plugins/bootstrap/css/bootstrap.css";
  @import "../assets/css/admin/plugins/jqgrid-5.3.0/ui.jqgrid-bootstrap4.css";
  @import "../assets/css/mall/common.css";
  @import "../assets/css/mall/styles/login.css";
  @import "../assets/css/mall/iconfont.css";
  @import "../assets/css/mall/swiper.min.css";
  @import "../assets/css/mall/styles/header.css";
  @import "../assets/css/admin/plugins/sweetalert/sweetalert.css";

</style>
