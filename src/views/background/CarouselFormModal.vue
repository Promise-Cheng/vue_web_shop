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
        <a-input v-model="formData.carouselUrl" placeholder="请输入" />
      </a-form-item>
      <a-form-item label="跳转链接：" :validate-status="status" :help="tips">
        <a-input v-model="formData.redirectUrl" placeholder="请输入" />
      </a-form-item>
      <a-form-item label="排序值：" :validate-status="status" :help="tips">
        <a-input v-model="formData.carouselRank" placeholder="请输入" />
      </a-form-item>
    </a-form>
  </a-modal>
</template>
<script>
  const Mock = require('mockjs')
  import * as backApi from '@/api/background/backApi'
  import moment from 'moment'
  import * as tips from "@/helper/Tips";
export default {
  name: "CarouselFormModal",
  props: {
    isEdit: {
      type: Boolean,
      defalut: false
    },
    defalutFormData: {
      type: Object,
      defalut: () => ({})
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
      title: ""
    };
  },
  methods: {
    handleChange(){

    },
    handleOk(e) {
      this.confirmLoading = true;
      const user = sessionStorage.getItem('userManager')
      const time = moment().format('YYYY-MM-DD')
      if (this.isEdit){
        backApi.background.updateCarouselList(
          {updateUser:time,updateTime:time,createTime:time,createUser:user,...this.formData}).then(res=>{
          tips.notice2("提示", "修改成功。", "success");
          this.visible = false;
          this.$emit("handle-ok", this.formData);
        }).finally(_=>{
          this.confirmLoading = false;
        }
      )
      }
      else
        backApi.background.saveCarouselList(
          {carouselId: moment().format('YYYYMMDD'),updateUser:time,updateTime:time,createTime:time,createUser:user,...this.formData}).then(res=>{
          tips.notice2("提示", "新增成功。", "success");
          this.visible = false;
        }).finally(_=>{
            this.confirmLoading = false;
          }
        )
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
