<template>
  <div style="background:white">
    <web-header @reload="reload"></web-header>
    <Main></Main>
    <web-footer></web-footer>
  </div>
</template>

<script>
import WebHeader from "@/components/Header";
import WebFooter from "@/components/Footer";
import Main from "@/views/_base/Main";

export default {
  name: "Base",
  components: { WebHeader, WebFooter, Main },
};
</script>

<style scoped>
</style>
