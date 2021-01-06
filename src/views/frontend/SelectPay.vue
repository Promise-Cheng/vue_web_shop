<template>
  <div class="page-main">
    <div class="container confirm-box">
      <form target="_blank" action="#" id="J_payForm" method="post">
        <div class="section section-order">
          <div class="order-info clearfix">
            <div class="fl">
              <h2 class="title">订单提交成功！去付款咯～</h2>
              <input type="hidden" id="orderNoValue" :value="orderNo">
              <p class="order-time" id="J_deliverDesc">订单号：
                {{ orderNo }}
              </p>
            </div>
            <div class="fr">
              <p class="total">
                应付总额：<span class="money">
                <em>{{ totalPrice+'.00' }}</em>元</span>
              </p>
            </div>
          </div>
        </div>
        <div class="section section-payment">
          <div class="cash-title" id="J_cashTitle">
            选择以下支付方式付款
          </div>
          <div class="payment-box ">
            <div class="payment-header clearfix">
              <h3 class="title">支付平台</h3>
              <span class="desc"></span>
            </div>
            <div class="payment-body">
              <ul class="clearfix payment-list J_paymentList J_linksign-customize">
                <li class="J_alipay">
                  <input type="radio" name="payOnlineBank" id="alipay" value="alipay">
                  <img @click="payOrder(1)" src="../../assets/images/pay/payOnline_zfb.png" alt="支付宝"
                       style="margin-left: 0;"></li>
                <li id="J_weixin">
                  <input type="radio" name="payOnlineBank" id="weixinpay" value="weixinpay">
                  <img @click="payOrder(2)" src="../../assets/images/pay/weixinpay.png" alt="微信支付"
                       style="margin-left: 0;">
                </li>
                <li class="J_bank">
                  <input type="radio" name="payOnlineBank" id="unionpay" value="unionpay">
                  <img @click="payOrder(0)" src="../../assets/images/pay/unionpay.png" alt="银联"
                       style="margin-left: 0;">
                </li>
              </ul>
            </div>
          </div>

          <div class="payment-box">
            <div class="payment-header clearfix">
              <h3 class="title">银行借记卡及信用卡</h3>
            </div>
            <div class="payment-body">
              <ul class="clearfix payment-list payment-list-much J_paymentList J_linksign-customize">
                <li class="J_bank">
                  <input type="radio" name="payOnlineBank" id="CMB" value="CMB">
                  <img @click="payOrder(0)" src="../../assets/images/pay/payOnline_zsyh.png" alt="">
                </li>
                <li class="J_bank">
                  <input type="radio" name="payOnlineBank" id="ICBCB2C" value="ICBCB2C">
                  <img @click="payOrder(0)" src="../../assets/images/pay/payOnline_gsyh.png" alt=""></li>
                <li class="J_bank">
                  <input type="radio" name="payOnlineBank" id="CCB" value="CCB">
                  <img @click="payOrder(0)" src="../../assets/images/pay/payOnline_jsyh.png" alt="">
                </li>
                <li class="J_bank">
                  <input type="radio" name="payOnlineBank" id="COMM" value="COMM">
                  <img @click="payOrder(0)" src="../../assets/images/pay/payOnline_jtyh.png" alt="">
                </li>
                <li class="J_bank">
                  <input type="radio" name="payOnlineBank" id="ABC" value="ABC">
                  <img @click="payOrder(0)" src="../../assets/images/pay/payOnline_nyyh.png" alt=""></li>
                <li class="J_bank">
                  <input type="radio" name="payOnlineBank" id="BOCB2C" value="BOCB2C">
                  <img @click="payOrder(0)" src="../../assets/images/pay/payOnline_zgyh.png" alt="">
                </li>
                <li class="J_bank">
                  <input type="radio" name="payOnlineBank" id="PSBC-DEBIT" value="PSBC-DEBIT">
                  <img @click="payOrder(0)" src="../../assets/images/pay/payOnline_youzheng.png" alt="">
                </li>
                <li class="J_bank">
                  <input type="radio" name="payOnlineBank" id="GDB" value="GDB">
                  <img @click="payOrder(0)" src="../../assets/images/pay/payOnline_gfyh.png" alt="">
                </li>
                <li class="J_bank">
                  <input type="radio" name="payOnlineBank" id="SPDB" value="SPDB">
                  <img @click="payOrder(0)" src="../../assets/images/pay/payOnline_pufa.png" alt="">
                </li>
                <li class="J_bank">
                  <input type="radio" name="payOnlineBank" id="CEBBANK" value="CEBBANK">
                  <img @click="payOrder(0)" src="../../assets/images/pay/payOnline_gdyh.png" alt="">
                </li>
                <li class="J_bank">
                  <input type="radio" name="payOnlineBank" id="CIB" value="CIB">
                  <img @click="payOrder(0)" src="../../assets/images/pay/payOnline_xyyh.png" alt="">
                </li>
              </ul>
            </div>
          </div>

          <div class="payment-box payment-box-last ">
            <div class="payment-header clearfix">
              <h3 class="title">快捷支付</h3>
              <span class="desc">（支持以下各银行信用卡以及部分银行借记卡）</span>
            </div>
            <div class="payment-body">
              <ul class="clearfix payment-list  J_paymentList J_linksign-customize">
                <li class="J_bank">
                  <input type="radio" name="payOnlineBank" id="CMB-KQ" value="CMB-KQ">
                  <img @click="payOrder(0)"
                       src="../../assets/images/pay/payOnline_zsyh.png"
                       alt=""></li>
                <li class="J_bank">
                  <input type="radio" name="payOnlineBank" id="COMM-KQ" value="COMM-KQ">
                  <img @click="payOrder(0)"
                       src="../../assets/images/pay/payOnline_jtyh.png"
                       alt=""></li>
                <li class="J_bank">
                  <input type="radio" name="payOnlineBank" id="CCB-KQ" value="CCB-KQ">
                  <img @click="payOrder(0)"
                       src="../../assets/images/pay/payOnline_jsyh.png"
                       alt=""></li>
                <li class="J_bank">
                  <input type="radio" name="payOnlineBank" id="ICBCB2C-KQ" value="ICBCB2C-KQ">
                  <img @click="payOrder(0)"
                       src="../../assets/images/pay/payOnline_gsyh.png"
                       alt=""></li>
                <li class="J_bank">
                  <input type="radio" name="payOnlineBank" id="CITIC-KQ" value="CITIC-KQ">
                  <img @click="payOrder(0)"
                       src="../../assets/images/pay/payOnline_zxyh.png"
                       alt=""></li>
                <li class="J_bank">
                  <input type="radio" name="payOnlineBank" id="CEBBANK-KQ" value="CEBBANK-KQ">
                  <img @click="payOrder(0)"
                       src="../../assets/images/pay/payOnline_gdyh.png"
                       alt=""></li>
                <li class="J_bank">
                  <input type="radio" name="payOnlineBank" id="BOCB2C-KQ" value="BOCB2C-KQ">
                  <img @click="payOrder(0)"
                       src="../../assets/images/pay/payOnline_zgyh.png"
                       alt=""></li>
                <li class="J_bank">
                  <input type="radio" name="payOnlineBank" id="SRCB-KQ" value="SRCB-KQ">
                  <img @click="payOrder(0)"
                       src="../../assets/images/pay/payOnline_shncsyyh.png"
                       alt=""></li>
                <li class="J_bank">
                  <input type="radio" name="payOnlineBank" id="JSB-KQ" value="JSB-KQ">
                  <img @click="payOrder(0)"
                       src="../../assets/images/pay/payOnline_jiangsshuyh.png"
                       alt=""></li>
                <li class="J_bank">
                  <input type="radio" name="payOnlineBank" id="CIB-KQ" value="CIB-KQ">
                  <img @click="payOrder(0)"
                       src="../../assets/images/pay/payOnline_xyyh.png"
                       alt=""></li>
              </ul>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>

</template>

<script>
  import * as tips from "@/helper/Tips"
  import * as api from "@/api/api"

  export default {
    name: "SelectPay",
    data() {
      return {
        orderNo: null,
        totalPrice: null,
      }
    },
    mounted() {
      this.orderNo = this.$route.query.id
      this.getPayData(this.$route.query.id)
    },
    methods: {
      getPayData(id){
        api.order.getOrderDetail(id).then(res=>{
          this.totalPrice = res.data.totalPrice
        })
      },
      payOrder(index) {
        let path = '';
        switch (index) {
          case 1:
            path = 'alipay';
            break;
          case 2:
            path = 'weixinpay';
            break;
          default:
            tips.notice2('提示', '暂不支持，请耐心等候', 'info')
            break;
        }
        if(index===0){
          return ;
        }
        this.$router.push({
          path: '/frontend/' + path,
          query:{
            id: this.orderNo
          }
        })
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/css/mall/styles/pay-select.css";
</style>
