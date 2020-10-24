<template>
  <div>
    <admin-sidebar></admin-sidebar>
    <router-view :style="{'margin-left': '10px'}"></router-view>
  </div>
</template>

<script>
  import AdminSidebar from "@/components/AdminSidebar";

  export default {
    name: "BackMain",
    components: {AdminSidebar},
    data() {
      return {
        height: window.innerHeight - 100,
        isRouterAlive: true,
        keepAliveList: []
      };
    },
    computed: {
      // key() {
      //   return this.$route.path + Math.random();
      // }
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../assets/css/admin/dist/css/adminlte.css";
</style>
