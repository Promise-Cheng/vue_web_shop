<template>
  <a-modal
    :title="title+'轮播图'"
    :visible="visible"
    :confirm-loading="confirmLoading"
    @ok="handleOk"
    @cancel="handleCancel"
    cancelText="取消"
    okText="确定"
  >
    <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="轮播图：" :validate-status="status" :help="tips">
        <a-input v-model="formData.photoUrl" placeholder="请输入" />
      </a-form-item>
      <a-form-item label="跳转链接：" :validate-status="status" :help="tips">
        <a-input v-model="formData.url" placeholder="请输入" />
      </a-form-item>
      <a-form-item label="排序值：" :validate-status="status" :help="tips">
        <a-input v-model="formData.sortValue" placeholder="请输入" />
      </a-form-item>
    </a-form>
  </a-modal>
</template>
<script>
export default {
  name: "CarouselFormModal",
  props: {
    isEdit: {
      type: Boolean,
      defalut: false
    },
    defalutFormData: {
      type: Object,
      defalut: () => ({
        photoUrl: "",
        url: "",
        sortValue: ""
      })
    }
  },
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
      formData: {},
      title: ""
    };
  },
  methods: {
    handleOk(e) {
      this.ModalText = "The modal will be closed after two seconds";
      this.confirmLoading = true;
      setTimeout(() => {
        this.visible = false;
        this.confirmLoading = false;
        this.$emit("handle-ok", this.formData);
      }, 2000);
    },
    handleCancel(e) {
      console.log("Clicked cancel button");
      this.visible = false;
    }
  },
  watch: {
    visible: {
      handler(newVal, oldVal) {
        if (!this.isEdit) {
          this.title = "新增";
          this.formData = {};
        } else {
          this.title = "修改";
          if (this.defalutFormData) this.formData = this.defalutFormData;
          else this.formData = {};
        }
      },
      // 代表在wacth里声明了firstName这个方法之后立即先去执行handler方法
      immediate: true
    }
  }
};
</script>
<style scoped>
</style>