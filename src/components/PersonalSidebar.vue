<template>
  <div class="lfnav fl" th:fragment="sidebar-fragment">
    <div class="nav_title">个人中心</div>
    <div class="title_list">
      <ul>
        <li>
          <a @click="gotoOtherPage('/frontend/personal')">个人中心</a>
        </li>
        <li>
          <a @click="gotoOtherPage('/frontend/orders')" class="active">我的订单</a>
        </li>
        <li>
          <a @click="loginOut()">退出登录</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "PersonalSidebar",
  methods: {
    gotoOtherPage(path) {
      this.$router.push({
        path: path
      });
    },
    loginOut() {
      sessionStorage.clear();
      this.$store.dispatch("clearSystems");
      this.$router.replace({
        path: "/frontend/index"
      });
    }
  }
};
</script>
<style lang="scss">
@import "../assets/css/mall/styles/personal.css";

</style>