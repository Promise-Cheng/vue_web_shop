<template>
  <div class="lfnav fl" th:fragment="sidebar-fragment">
    <div class="nav_title">个人中心</div>
    <div class="title_list">
      <ul>
        <li>
          <a @click="gotoOtherPage('/frontend/personal')" :class="isPersonal?'active':''">个人中心</a>
        </li>
        <li>
          <a @click="gotoOtherPage('/frontend/orders')" :class="isOrder?'active':''">我的订单</a>
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
  props:{
    isPersonal:{
        type: Boolean,
        default: false,
    },
    isOrder:{
        type: Boolean,
        default: false,
    }
  },
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