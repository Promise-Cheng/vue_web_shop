<template>
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="/admin/index" class="brand-link">
      <img src="../assets/css/admin/dist/img/new-bee-logo-1.png" alt="ssm-cluster Logo"
           class="brand-image img-circle elevation-3"
           style="opacity: .8">
      <span class="brand-text font-weight-light">NEWBEE商城</span>
    </a>
    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu"
            data-accordion="false">
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
          <li class="nav-header">Dashboard</li>
          <li class="nav-item">
            <a href="/admin/index" :class="path==='index'?'nav-link active':'nav-link'">
              <i class="nav-icon fa fa-dashboard"></i>
              <p>
                Dashboard
              </p>
            </a>
          </li>
          <li class="nav-item">
            <a href="/admin/goods/edit" :class="path==='goods-edit'?'nav-link active':'nav-link'">
              <i class="nav-icon fa fa-plus"></i>
              <p>
                商品信息
              </p>
            </a>
          </li>
          <li class="nav-header">首页配置</li>
          <li class="nav-item">
            <a href="/admin/carousels"
               :class="path==='newbee_mall_carousel'?'nav-link active':'nav-link'">
              <i class="nav-icon fa fa-file-image-o"></i>
              <p>
                轮播图配置
              </p>
            </a>
          </li>
          <li class="nav-item">
            <a href="/admin/indexConfigs?configType=3"
               :class="path==='INDEX_GOODS_HOTS'?'nav-link active':'nav-link'">
              <i class="nav-icon fa fa-hand-o-up"></i>
              <p>
                热销商品配置
              </p>
            </a>
          </li>
          <li class="nav-item">
            <a href="/admin/indexConfigs?configType=4"
               :class="path==='INDEX_GOODS_NEW'?'nav-link active':'nav-link'">
              <i class="nav-icon fa fa-hand-o-up"></i>
              <p>
                新品上线配置
              </p>
            </a>
          </li>
          <li class="nav-item">
            <a href="/admin/indexConfigs?configType=5"
               :class="path==='INDEX_GOODS_RECOMMOND'?'nav-link active':'nav-link'">
              <i class="nav-icon fa fa-hand-o-up"></i>
              <p>
                为你推荐配置
              </p>
            </a>
          </li>
          <li class="nav-header">管理模块</li>
          <li class="nav-item">
            <a href="/admin/categories?parentId=0&categoryLevel=1&backParentId=0"
               :class="path==='newbee_mall_category'?'nav-link active':'nav-link'">
              <i class="fa fa-list-alt nav-icon" aria-hidden="true"></i>
              <p>
                分类管理
              </p>
            </a>
          </li>
          <li class="nav-item">
            <a href="/admin/goods" :class="path==='newbee_mall_goods'?'nav-link active':'nav-link'">
              <i class="fa fa-archive nav-icon" aria-hidden="true"></i>
              <p>
                商品管理
              </p>
            </a>
          </li>
          <li class="nav-item">
            <a href="/admin/users" :class="path==='users'?'nav-link active':'nav-link'">
              <i class="fa fa-users nav-icon" aria-hidden="true"></i>
              <p>
                会员管理
              </p>
            </a>
          </li>
          <li class="nav-item">
            <a href="/admin/orders" :class="path==='orders'?'nav-link active':'nav-link'">
              <i class="fa fa-money nav-icon" aria-hidden="true"></i>
              <p>
                订单管理
              </p>
            </a>
          </li>
          <li class="nav-header">系统管理</li>
          <li class="nav-item">
            <a href="/admin/profile"
               :class="path==='profile'?'nav-link active':'nav-link'">
              <i class="fa fa-user-secret nav-icon"></i>
              <p>修改密码</p>
            </a>
          </li>
          <li class="nav-item">
            <a href="/admin/logout" class="nav-link">
              <i class="fa fa-sign-out nav-icon"></i>
              <p>安全退出</p>
            </a>
          </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
    export default {
        name: "AdminSidebar",
      computed:{
        path(){
          console.log(this.$route.path);
          return this.$route.path;
        }
      }
    }
</script>

<style scoped>
  @import "../assets/css/admin/dist/css/adminlte.css";

</style>
