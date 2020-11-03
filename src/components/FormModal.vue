<template>
  <a-modal
    title="Title"
    :visible="visible"
    :confirm-loading="confirmLoading"
    @ok="handleOk"
    @cancel="handleCancel"
  >
    <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="测试检验1：" :validate-status="status" :help="tips">
        <a-input v-model="formData.testField" placeholder="请输入" />
      </a-form-item>
    </a-form>
  </a-modal>
</template>
<script>
export default {
  name: "FormModal",
  data() {
    return {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 }
      },
      status: "",
      tips: "",
      ModalText: "Content of the modal",
      visible: false,
      confirmLoading: false,
      formData: {
        testField: null,
      }
    };
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    handleOk(e) {
      this.ModalText = "The modal will be closed after two seconds";
      this.confirmLoading = true;
      setTimeout(() => {
        this.visible = false;
        this.confirmLoading = false;
        this.$emit('handle-ok',this.formData);
      }, 2000);
    },
    handleCancel(e) {
      console.log("Clicked cancel button");
      this.visible = false;
    }
  }
};
</script>
<style scoped>
</style>