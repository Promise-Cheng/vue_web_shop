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
        <a-input v-model="formData.goodsId" placeholder="请输入"/>
      </a-form-item>
      <a-form-item label="商品名称：" :validate-status="status" :help="tips">
        <a-input v-model="formData.goodsName" placeholder="请输入"/>
      </a-form-item>
      <a-form-item label="商品描述：" :validate-status="status" :help="tips">
        <a-input v-model="formData.goodsIntro" placeholder="请输入"/>
      </a-form-item>
      <a-form-item label="库存：" :validate-status="status" :help="tips">
        <a-input v-model="formData.stockNum" placeholder="请输入"/>
      </a-form-item>
      <a-form-item label="价格：" :validate-status="status" :help="tips">
        <a-input v-model="formData.sellingPrice" placeholder="请输入"/>
      </a-form-item>
      <a-form-item label="是否架：" :validate-status="status" :help="tips">
        <a-input v-model="formData.goodsSellStatus" placeholder="请输入(0上架，1下架)"/>
      </a-form-item>
    </a-form>
  </a-modal>
</template>
<script>
  import moment from "moment";
  import * as backApi from "@/api/background/backApi";
  import * as tips from "@/helper/Tips";

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
        this.formData.goodsDetailContent = 'test'
        if (this.isEdit) {
          backApi.background.updateGoodsList(
            {updateUser: user, updateTime: time, createTime: time, createUser: user, ...this.formData}).then(res => {
            tips.notice2("提示", "修改成功。", "success");
            this.visible = false;
            this.$emit("handle-ok", this.formData);
          }).finally(_ => {
              this.confirmLoading = false;
            }
          )
        } else
          backApi.background.saveGoodsList(
            {
              originalPrice: 100,
              goodsDetailContent:'test',
              goodsCoverImg:'test',
              goodsCarousel:'test',
              goodsCategoryId: 0,
              goodsName: "1",
              tag: '111',
              goodsId: moment().format('hhmmss'),
              updateUser: user,
              updateTime: time,
              createTime: time,
              createUser: user, ...this.formData
            }).then(res => {
            tips.notice2("提示", "新增成功。", "success");
            this.$emit("handle-ok");
            this.visible = false;
          }).finally(_ => {
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
