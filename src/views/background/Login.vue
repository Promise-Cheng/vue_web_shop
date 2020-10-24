<template>
<div>
  <div id="particles">
  </div>
  <div class="login-box">
    <div class="login-logo" style="color: #1baeae;">
      <img src="../../assets/images/new-bee-logo-3.png" style="    height: 58px;float: left;margin-left: 10px;">
      <h1>管理系统登陆</h1>
    </div>
    <!-- /.login-logo -->
    <div class="card">
      <div class="card-body login-card-body">
        <p class="login-box-msg"> NewBee MALL , Let's Go !</p>
        <form>
          <div class="form-group">
            <div class="alert alert-danger" :text="$store.state.errorMsg">请登录</div>
          </div>
          <div class="form-group has-feedback">
            <span class="fa fa-user form-control-feedback"></span>
            <input type="text" id="userName" name="userName" class="form-control" placeholder="请输入账号"
                   required="true">
          </div>
          <div class="form-group has-feedback">
            <span class="fa fa-lock form-control-feedback"></span>
            <input type="password" id="password" name="password" class="form-control" placeholder="请输入密码"
                   required="true">
          </div>
          <div class="form-group has-feedback"></div>
          <div class="row">
            <div class="col-8">
            </div>
            <div class="col-4">
              <button type="submit" class="btn btn-primary btn-block btn-flat">登录
              </button>
            </div>
          </div>
        </form>

      </div>
      <!-- /.login-card-body -->
    </div>
  </div>
</div>
</template>

<script>
    export default {
        name: "Login"
    }
</script>

<style scoped>
  @import "../../assets/css/admin/dist/css/font-awesome.min.css";
  @import "../../assets/css/admin/dist/css/adminlte.min.css";
  canvas {
    display: block;
    vertical-align: bottom;
  }
  #particles {
    background-color: #F7FAFC;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
</style>
