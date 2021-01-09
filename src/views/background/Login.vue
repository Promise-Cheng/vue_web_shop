<template>
  <div>
    <div id="particles">
    </div>
    <div class="login-box">
      <div class="login-logo" style="color: #1baeae;">
        <img src="../../assets/images/logo.png" style="height: 58px; width: 70px float: left;margin-left: 10px;">
        <h1>管理系统登陆</h1>
      </div>
      <!-- /.login-logo -->
      <div class="card">
        <div class="card-body login-card-body">
          <p class="login-box-msg"> 青木商城</p>
          <form>
            <div class="form-group">
              <div class="alert alert-danger">请登录</div>
            </div>
            <div class="form-group has-feedback">
              <span class="fa fa-user form-control-feedback"></span>
              <input type="text" v-model="userName" class="form-control" placeholder="请输入账号"
                     required="true">
            </div>
            <div class="form-group has-feedback">
              <span class="fa fa-lock form-control-feedback"></span>
              <input type="password" v-model="password" class="form-control" placeholder="请输入密码"
                     required="true">
            </div>
            <div class="form-group has-feedback"></div>
            <div class="row">
              <div class="col-8">
              </div>
              <div class="col-4">
                <button @click="login" type="submit" class="btn btn-primary btn-block btn-flat">登录
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
  import * as api from '@/api/api'
  import * as tips from '@/helper/Tips'

  export default {
    name: "Login",
    data() {
      return {
        userName: '',
        password: '',
      }
    },
    methods: {
      login() {
        console.log('登录');
        tips.notice2('提示','登录成功','success')
        // api.background.login({userName: this.userName, password: this.password,verifyCode: '123456'}).then(res => {
        //   console.log(res)
        //  localStorage.setItem("token", res.data);
          this.$router.push({
            path: '/admin/index',
          })
        // })

      }
    }
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
