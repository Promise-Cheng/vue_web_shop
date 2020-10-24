<template>
  <div class="body">
    <h1 class="mod-title">
      <span class="ico_log icon-wx-pay"></span>
    </h1>
    <div class="mod-ct">
      <div class="order">
      </div>
      <div class="amount" id="money">
        ￥{{totalPrice+'.00'}}
      </div>
      <div class="qrcode-img-wrapper">
        <div data-role="qrPayImg" class="qrcode-img-area">
          <div class="ui-loading qrcode-loading" data-role="qrPayImgLoading"></div>
          <div style="position: relative;display: inline-block;">
            <img id="show_qrcode" width="300" height="300"
                 src="../../assets/images/pay/wxpay_qrcode.png"
                 title="请尽快支付"
                 style="display: block;">
          </div>
        </div>
      </div>

      <div class="time-item" style="padding-top: 10px">
        <div class="time-item" id="msg"><h1>支付完成后，将跳转至订单详情</h1></div>
        <div class="time-item">
          <h1>订单:{{orderNo}}
          </h1>
        </div>
        <input type="hidden" id="orderNoValue" :value="orderNo">
      </div>

      <div class="tip">
        <div class="ico-scan-wx"></div>
        <div class="tip-text">
          <p id="showtext">打开微信 [扫一扫]</p>
        </div>
        <div class="tip-text">
          <a @click="payOrderSuccess()"
             class="btn btn-small btn-success" title="支付成功">支付成功</a>
        </div>
      </div>

      <div class="tip-text">
      </div>

    </div>
    <div class="foot">
    </div>
  </div>
</template>

<script>
    export default {
        name: "weixinpay",
      data(){
          return{
            orderNo:null,
          }
      },
      methods:{
        payOrderSuccess(){

        },
      }
    }
</script>

<style scoped>
  @import "../../assets/css/mall/styles/pay.css";
  @import "../../assets/css/mall/swiper.min.css";
  @import "../../assets/css/admin/plugins/sweetalert/sweetalert.css";
  @import "../../assets/css/mall/iconfont.css";
</style>
