<template>
  <a-modal
    title="个人信息修改"
    :visible="visible"
    :confirm-loading="confirmLoading"
    ok-text="保存"
    cancel-text="取消"
    @ok="handleOk"
    @cancel="handleCancel"
  >
    <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="昵称:" :validate-status="status" :help="tips">
        <a-input v-model="formData.nickName" placeholder="请输入" />
      </a-form-item>
      <a-form-item label="密码:" :validate-status="status" :help="tips">
        <a-input v-model="formData.password" placeholder="请输入" />
      </a-form-item>
      <a-form-item label="个性签名:" :validate-status="status" :help="tips">
        <a-input v-model="formData.introduceSign" placeholder="请输入" />
      </a-form-item>
    </a-form>
  </a-modal>
</template>
<script>
  import * as api from '@/api/api'
  import md5 from 'js-md5'

  export default {
    name: "EditPersonalData",
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
          nickName: null,
          password: null,
          introduceSign: null,
        }
      };
    },
    methods: {
      showModal(option) {
        this.visible = true;
        this.formData = option.data;
      },
     async handleOk() {
       this.confirmLoading = true;
       const params = {
         nickName: this.formData.nickName,
         passwordMd5: md5(this.formData.password),
         introduceSign: this.formData.introduceSign,
       }
       await api.user.editUserInfo(params)
       this.visible = false;
       this.confirmLoading = false;
       this.$emit('handle-ok',this.formData);
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
