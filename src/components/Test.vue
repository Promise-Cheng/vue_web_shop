<template>
  <div style="margin:auto">
    <a-button type="primary" @click="showModal">Open Modal with async logic</a-button>
    <form-modal ref="formModal" @handle-ok="handleOk"></form-modal>
  </div>
</template>
<script>
import FormModal from "@/components/FormModal";
export default {
  name: "Test",
  components: { FormModal },
  methods: {
    showModal() {
      this.$refs.formModal.visible = true;
    },
    handleOk(data) {
      console.log(data);
    }
  }
};
</script>
<style scoped>
</style>