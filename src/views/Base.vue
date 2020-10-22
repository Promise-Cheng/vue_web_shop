<template>
  <div>
    <web-header></web-header>
    <web-footer></web-footer>
  </div>
</template>

<script>
  import WebHeader from "@/components/Header"
  import WebFooter from "@/components/Footer"

  export default {
    name: "Base",
    components: {WebHeader, WebFooter},
  }
</script>

<style scoped>

</style>
