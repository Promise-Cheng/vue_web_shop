<template>
  <div style="display: flex;justify-content: flex-start">
    <admin-sidebar></admin-sidebar>
    <router-view></router-view>
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
