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

<style scoped>
</style>
