<template>
  <div style="background:white">
    <web-header v-if="!$route.meta.hiddenHeader"></web-header>
    <Main></Main>
    <web-footer v-if="!$route.meta.hiddenFooter"></web-footer>
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

<style lang="scss" scoped>
</style>
