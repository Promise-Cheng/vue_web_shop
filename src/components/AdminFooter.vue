<template>
  <div>
<!--    <web-footer></web-footer>-->
    <footer class="main-footer">
      <strong>Copyright &copy; 2020 <a href="https://gitee.com/Promise-Cheng/mall-project" target="_blank">Promise-Cheng</a>.</strong>
      All rights reserved.
      <div class="float-right d-none d-sm-inline-block">
        <b>newbee-mall #Version</b> 1.0.0
      </div>
    </footer>
  </div>
</template>

<script>
  import WebFooter from "@/components/Footer";
  export default {
    name: "AdminFooter",
    components: {WebFooter}
  }
</script>

<style scoped>
  @import "../assets/css/admin/dist/css/adminlte.css";

</style>
