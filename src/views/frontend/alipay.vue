<template>
  <div class="body">
    <h1 class="mod-title">
      <span class="ico_log icon-ali-pay"></span>
    </h1>

    <div class="mod-ct">
      <div class="order"></div>
      <div class="amount" id="money">
        ￥
        {{ totalPrice + '.00'}}
      </div>
      <div class="qrcode-img-wrapper" data-role="qrPayImgWrapper">
        <div data-role="qrPayImg" class="qrcode-img-area">
          <div class="ui-loading qrcode-loading" data-role="qrPayImgLoading"></div>
          <div style="position: relative;display: inline-block;">
            <img
              width="300"
              height="300"
              src="../../assets/images/pay/alipay_qrcode.png"
              title="请尽快支付~"
              style="display: block;"
            />
          </div>
        </div>
      </div>

      <div class="time-item" style="padding-top: 10px">
        <div class="time-item" id="msg">
          <h1>支付完成后，将跳转至订单详情</h1>
        </div>
        <div class="time-item">
          <h1>
            订单:
            {{ orderNo }}
          </h1>
        </div>
        <input type="hidden" id="orderNoValue" :value="orderNo" />
      </div>

      <div class="tip">
        <div class="ico-scan-ali"></div>
        <div class="tip-text">
          <p id="showtext">打开支付宝 [扫一扫]</p>
        </div>
        <div class="tip-text">
          <a @click="payOrderSuccess()" class="btn btn-small btn-success" title="支付成功">支付成功</a>
        </div>
      </div>

      <div class="tip-text"></div>
    </div>
  </div>
</template>
<script>
import * as api from "@/api/api";
import * as tips from "@/helper/Tips";

export default {
  data(){
    return{
      orderNo: '',
      totalPrice: 0
    }
  },
  mounted() {
    this.orderNo = this.$route.query.id
    this.getPayData(this.$route.query.id)
  },
  methods:{
    getPayData(id){
      api.order.getOrderDetail(id).then(res=>{
        this.totalPrice = res.data.totalPrice
      })
    },
    payOrderSuccess(){
      api.order.paySuccess({orderNo:this.orderNo,payType:1}).then(res=>{
        tips.notice2('提示','支付成功','success')
        this.$router.push({
          path:'/frontend/order-detail',
          query: {
            id:this.orderNo
          }
        })
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../assets/css/mall/styles/pay.css";
@import "../../assets/css/mall/swiper.min.css";
@import "../../assets/css/admin/plugins/sweetalert/sweetalert.css";
@import "../../assets/css/mall/iconfont.css";
</style>
