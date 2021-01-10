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
      <a-form-item label="配置项名称：" :validate-status="status" :help="tips">
        <a-input v-model="formData.configName" placeholder="请输入"/>
      </a-form-item>
      <a-form-item label="跳转链接：" :validate-status="status" :help="tips">
        <a-input v-model="formData.redirectUrl" placeholder="请输入"/>
      </a-form-item>
      <a-form-item label="排序值：" :validate-status="status" :help="tips">
        <a-input v-model="formData.configRank" placeholder="请输入"/>
      </a-form-item>
      <a-form-item label="商品编号：" :validate-status="status" :help="tips">
        <a-input v-model="formData.goodsId" placeholder="请输入"/>
      </a-form-item>
    </a-form>
  </a-modal>
</template>
<script>
  import * as backApi from '@/api/background/backApi'
  import * as tips from '@/helper/Tips'
  import moment from "moment";

  export default {
    name: "BestSellerFormModal",
    props: {
      isEdit: {
        type: Boolean,
        default: false
      },
      detail: {
        type: String,
        default: "热销商品"
      },
      configType: {
        type: Number,
        default: 3
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
          xs: {span: 24},
          sm: {span: 5}
        },
        wrapperCol: {
          xs: {span: 24},
          sm: {span: 12}
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
      handleChange() {

      },
      handleOk(e) {
        this.confirmLoading = true;
        const user = sessionStorage.getItem('userManager')
        const time = moment().format('YYYY-MM-DD hh:mm:ss')
        if (!this.isEdit) {
          backApi.indexConfigs.save({
            configType:this.configType,
            isDeleted: 0,
            configId: moment().format('hhmmss'),
            updateUser: user,
            updateTime: time,
            createTime: time,
            createUser: user,
            ...this.formData
          }).then(res=>{
            tips.notice2("提示", "新增成功。", "success");
          })
        }else {
          backApi.indexConfigs.edit({
            configType:this.configType,
            isDeleted: 0,
            updateUser: user,
            updateTime: time,
            createTime: time,
            createUser: user,
            ...this.formData
          }).then(res=>{
            tips.notice2("提示", "新增成功。", "success");
          })
        }
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
