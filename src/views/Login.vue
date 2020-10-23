<template>
  <div>
    <div class="top center">
      <div class="logo center">
        <a @click="onClickIcon" target="_blank">
          <img src="../assets/images/login-logo-2.png" alt />
        </a>
      </div>
    </div>
    <div class="form center">
      <div class="login">
        <div class="login_center">
          <div class="login_top">
            <div class="left fl">会员登录</div>
            <div class="right fr">
              您还不是我们的会员？
              <a @click="onClickRegister()" class="choose">立即注册</a>
            </div>
            <div class="clear"></div>
            <div class="under-line center"></div>
          </div>
          <form id="loginForm" onsubmit="return false;" action="##">
            <div class="login_main center">
              <div class="login-info">
                手机号:&nbsp;
                <a-input
                  class="login-info-input"
                  type="text"
                  v-model="loginName"
                  placeholder="请输入你的手机号"
                />
              </div>
              <div class="login-info">
                密&nbsp;&nbsp;&nbsp;&nbsp;码:&nbsp;
                <a-input
                  class="login-info-input"
                  v-model="password"
                  type="password"
                  placeholder="请输入你的密码"
                />
              </div>
            </div>
            <div class="login_submit">
              <input class="submit" type="submit" @click="login()" value="立即登录" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import * as tips from "@/helper/Tips";
import * as api from "@/api/api";

export default {
  name: "Login",
  data() {
    return {
      loginName: "",
      password: ""
    };
  },
  methods: {
    onClickIcon() {
      this.$router.push({
        path: "index"
      });
    },
    onClickRegister() {
      this.$router.push({
        path: "register"
      });
    },
    login() {
      // if (!this.validPhoneNumber(this.loginName)) {
      //   tips.notice2('提示','请输入正确的登录名(即手机号)','info');
      //   return false;
      // }
      // if (!this.validPassword(this.password)) {
      //   tips.notice2('提示','请输入正确的密码格式(6-20位字符和数字组合)','info')
      //   return false;
      // }
      api.index
        .login({ loginName: this.loginName, password: this.password })
        .then(res => {
          console.log(res);
          tips.notice2("警告", "用户名或密码输入错误！", "warning");
          sessionStorage.setItem("ms_username", this.loginName);
          sessionStorage.setItem("ms_password", this.password);
          this.$store.dispatch("getUserInfo");
          // this.$router.push({
          //   path:'index',
          // })
        })
        .catch(err => {
          tips.notice2("错误", err, "error");
        });
    },

    /**
     * 用户名称验证 4到16位（字母，数字，下划线，减号）
     *
     * @param userName
     * @returns {boolean}
     */
    validUserName(userName) {
      var pattern = /^[a-zA-Z0-9_-]{4,16}$/;
      if (pattern.test(userName.trim())) {
        return true;
      } else {
        return false;
      }
    },

    /**
     * 手机号正则验证
     * @returns {boolean}
     */
    validPhoneNumber(phone) {
      if (/^1(3|4|5|6|7|8|9)\d{9}$/.test(phone)) {
        return true;
      }
      return false;
    },

    /**
     * 用户密码验证 最少6位，最多20位字母或数字的组合
     *
     * @param password
     * @returns {boolean}
     */
    validPassword(password) {
      var pattern = /^[a-zA-Z0-9]{6,20}$/;
      if (pattern.test(password.trim())) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>
<style lang="scss">
@import "../assets/css/mall/common.css";
@import "../assets/css/mall/styles/header.css";
@import "../assets/css/mall/styles/login.css";
.choose {
  cursor: pointer;
}
</style>
