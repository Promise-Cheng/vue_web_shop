<template>
  <div>
    <div class="top center">
      <div class="logo center">
        <a href="#" target="_blank">
          <img src="../assets/images/login-logo-2.png" alt/>
        </a>
      </div>
    </div>
    <div class="form center">
      <div class="login">
        <div class="login_center">
          <div class="login_top">
            <div class="left fl">会员注册</div>
            <div class="right fr">您已有账号？
              <a @click="onClickLogin" class="choose">请登录</a></div>
            <div class="clear"></div>
            <div class="under-line center"></div>
          </div>
          <form id="registerForm" onsubmit="return false;" action="##">
            <div class="login_main center">
              <div class="login-info">手机号:&nbsp;
                <a-input class="login-info-input" type="text"
                         v-model="loginName"
                         placeholder="请输入你的手机号"/>
              </div>
              <div class="login-info">密&nbsp;&nbsp;&nbsp;&nbsp;码:&nbsp;
                <a-input class="login-info-input"
                         type="password"
                         v-model="password"
                         placeholder="请输入你的密码"/>
              </div>
            </div>
            <div class="login_submit">
              <input class="submit" type="button" onclick="register()" value="立即注册">
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import * as tips from "@/helper/Tips";
  import * as api from "@/api/api"

  export default {
    name: 'Register',
    data() {
      return {
        loginName: '',
        password: '',
      }
    },
    methods: {
      onClickLogin() {
        this.$router.push({
          path: '/',
        })
      },
      register() {
        api.index.register({loginName: this.loginName, password: this.password}).then((res) => {
          console.log(res);
          tips.notice2('警告', '账号已存在！', 'warning');
          // this.$router.push({
          //   path:'index',
          // })
        }).catch(err => {
          tips.notice2('错误', err, 'error');
        })
      }
    }
  }
</script>
<style lang="scss">
  @import "../assets/css/mall/common.css";
  @import "../assets/css/mall/styles/header.css";
  @import "../assets/css/mall/styles/login.css";

  .choose {
    cursor: pointer;
  }
</style>
