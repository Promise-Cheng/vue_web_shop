<template>
  <div style="background:white">
    <admin-header v-if="!$route.meta.hiddenHeader"></admin-header>
    <back-main></back-main>
    <admin-footer v-if="!$route.meta.hiddenFooter"></admin-footer>
  </div>
</template>

<script>
  import AdminHeader from "@/components/AdminHeader";
  import AdminFooter from "@/components/AdminFooter";
  import BackMain from "@/views/background/BackMain";

  export default {
    name: "BackBase",
    components: {BackMain, AdminFooter, AdminHeader },
  };
</script>

<style lang="scss" scoped>
</style>
