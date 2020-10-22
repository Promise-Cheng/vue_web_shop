<template>
  <div :style="{overflow: 'auto',height: height + 'px'}">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: "Main",
    data(){
      return {
        height: window.innerHeight - 100,
        isRouterAlive: true,
        keepAliveList: [],
      }
    },
  }
</script>

<style scoped>

</style>
