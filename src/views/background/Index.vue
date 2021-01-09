<template>
  <div class="hold-transition sidebar-mini">
    <div class="wrapper">
      <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <div class="content-header">
          <div class="container-fluid"></div>
          <!-- /.container-fluid -->
        </div>
        <!-- Main content -->
        <div class="content">
          <div class="card card-primary card-outline">
            <div class="card-header">
              <h3 class="card-title">首页</h3>
            </div>
            <!-- /.card-body -->
            <div class="card-body">
              <div class="panel panel-default">
                <div style="padding: 10px 0 20px 10px;">
                  <a href="https://gitee.com/Promise-Cheng/mall-project" target="_blank">
                    <img
                      src="../../assets/images/logo.png"
                      style="width: 480px;height: 240px;"
                    />
                    <p>
                      青木商城 项目是一套电商系统，包括 青木商城 商城系统及 青木商城-admin 商城后台管理系统，基于 Spring Boot
                      2.X
                      及相关技术栈开发。
                      前台商城系统包含首页门户、商品分类、新品上线、首页轮播、商品推荐、商品搜索、商品展示、购物车、订单结算、订单流程、个人订单管理等模块。
                      后台管理系统包含数据面板、轮播图管理、商品管理、订单管理等模块。
                    </p>
                  </a>
                  <p>青木商城 在 GitHub 和国内的码云都创建了代码仓库，如果有人访问 GitHub 比较慢的话，建议在 Gitee 上查看该项目，两个仓库会保持同步更新。</p>
                  <ul>
                    <li>
                      <a
                        href="https://github.com/Promise-Cheng/vue_web_shop"
                        target="_blank"
                      >青木商城 in GitHub</a>
                    </li>
                    <li>
                      <a
                        href="https://gitee.com/Promise-Cheng/mall-project"
                        target="_blank"
                      >青木商城 in Gitee</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <!-- /.container-fluid -->
        </div>
        <!-- /.content -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index"
};
</script>

<style scoped>
@import "../../assets/css/admin/dist/css/main.css";
@import "../../assets/css/admin/dist/css/adminlte.css";
@import "../../assets/css/admin/dist/css/adminlte.min.css";
@import "../../assets/css/admin/plugins/bootstrap/css/bootstrap.css";
@import "../../assets/css/admin/plugins/jqgrid-5.3.0/ui.jqgrid-bootstrap4.css";
</style>
