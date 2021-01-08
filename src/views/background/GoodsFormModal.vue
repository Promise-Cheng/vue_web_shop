<template>
  <a-modal
    :title="title+detail"
    :visible="visible"
    :confirm-loading="confirmLoading"
    @ok="handleOk"
    @cancel="handleCancel"
    cancelText="取消"
    okText="确定"
  >
    <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="商品编号：" :validate-status="status" :help="tips">
        <a-input v-model="formData.goodId" placeholder="请输入" />
      </a-form-item>
      <a-form-item label="商品编号：" :validate-status="status" :help="tips">
        <a-input v-model="formData.goodName" placeholder="请输入" />
      </a-form-item>
      <a-form-item label="商品描述：" :validate-status="status" :help="tips">
        <a-input v-model="formData.goodtext" placeholder="请输入" />
      </a-form-item>
      <a-form-item label="库存：" :validate-status="status" :help="tips">
        <a-input v-model="formData.have" placeholder="请输入" />
      </a-form-item>
      <a-form-item label="价格：" :validate-status="status" :help="tips">
        <a-input v-model="formData.price" placeholder="请输入" />
      </a-form-item>
      <a-form-item label="是否架：" :validate-status="status" :help="tips">
        <a-switch v-model="formData.state" />
      </a-form-item>
    </a-form>
  </a-modal>
</template>
<script>
  export default {
    name: "GoodsFormModal",
    props: {
      isEdit: {
        type: Boolean,
        default: false
      },
      detail: {
        type: String,
        default: "热销商品"
      },
      defalutFormData: {
        type: Object,
        default: () => ({
          photoUrl: "",
          url: "",
          sortValue: ""
        })
      }
    },
    data() {
      return {
        previewVisible: false,
        previewImage: "",
        fileList: [],
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
        visible: false,
        confirmLoading: false,
        formData: {},
        title: "",
      };
    },
    methods: {
      handleChange(){

      },
      handleOk(e) {
        this.confirmLoading = true;
        setTimeout(() => {
          this.visible = false;
          this.confirmLoading = false;
          this.$emit("handle-ok", this.formData);
        }, 2000);
      },
      handleCancel(e) {
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
            console.log(this.defalutFormData)
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
