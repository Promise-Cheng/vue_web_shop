<template>
  <div>
    <keep-alive>
      <router-view :key="key"></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {
      height: window.innerHeight - 100,
      isRouterAlive: true,
      keepAliveList: []
    };
  },
  computed: {
    key() {
      return this.$route.path + Math.random();
    }
  }
};
</script>

<style lang="scss">
@import "../../assets/css/mall/swiper.min.css";
@import "../../assets/css/admin/plugins/sweetalert/sweetalert.css";
@import "../../assets/css/mall/styles/index.css";
@import "../../assets/css/mall/iconfont.css";
</style>
