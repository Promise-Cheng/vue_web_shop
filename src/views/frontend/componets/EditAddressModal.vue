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
      <a-form-item label="姓名:" :validate-status="status" :help="tips">
        <a-input v-model="content.name" placeholder="请输入"/>
      </a-form-item>
      <a-form-item label="电话:" :validate-status="status" :help="tips">
        <a-input v-model="content.tel" placeholder="请输入"/>
      </a-form-item>
      <a-form-item label="省市:" :validate-status="status" :help="tips">
        <a-input v-model="content.province" placeholder="请输入"/>
      </a-form-item>
      <a-form-item label="城市:" :validate-status="status" :help="tips">
        <a-input v-model="content.city" placeholder="请输入"/>
      </a-form-item>
      <a-form-item label="国家:" :validate-status="status" :help="tips">
        <a-input v-model="content.county" placeholder="请输入"/>
      </a-form-item>
      <a-form-item label="详细地址:" :validate-status="status" :help="tips">
        <a-input v-model="content.addressDetail" placeholder="请输入"/>
      </a-form-item>
    </a-form>
  </a-modal>
</template>
<script>
  import * as api from '@/api/api'

  export default {
    name: "EditAddressModal",
    data() {
      return {
        labelCol: {
          xs: {span: 24},
          sm: {span: 5}
        },
        wrapperCol: {
          xs: {span: 24},
          sm: {span: 12}
        },
        finish: null,
        reject: null,
        status: "",
        tips: "",
        ModalText: "Content of the modal",
        visible: false,
        confirmLoading: false,
        content: {
          id: null,
          name: null,
          tel: null,
          province: null,
          city: null,
          county: null,
          addressDetail: null,
          isDefault: true
        }
      };
    },
    methods: {
      showModal(option) {
        this.visible = true;
        if (option) {
          this.content = {
            id: option.addressId,
            name: option.userName,
            tel: option.userPhone,
            province: option.provinceName,
            city: option.cityName,
            county: option.regionName,
            addressDetail: option.detailAddress,
            isDefault: true
          }
        }
        return new Promise((res, rej) => {
          this.finish = res
          this.reject = rej
        })
      },
      async handleOk() {
        this.confirmLoading = true;
        const params = {
          userName: this.content.name,
          userPhone: this.content.tel,
          provinceName: this.content.province,
          cityName: this.content.city,
          regionName: this.content.county,
          detailAddress: this.content.addressDetail,
          defaultFlag: this.content.isDefault ? 1 : 0,
        }
        if (this.content.id) {
          Object.assign(params, {addressId: this.content.id})
          await api.address.editDefaultAddress(params)
        } else
          await api.address.addDefaultAddress(params)
        this.finish(params)
        this.visible = false;
        this.confirmLoading = false;
      },
      handleCancel(e) {
        this.reject()
        this.visible = false;
      }
    }
  };
</script>
<style lang="scss">
  .ant-form-item {
    margin-bottom: 0 !important;
  }
</style>
