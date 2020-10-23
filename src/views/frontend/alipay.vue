<template>
  <div class="body">
    <h1 class="mod-title">
      <span class="ico_log icon-ali-pay"></span>
    </h1>

    <div class="mod-ct">
      <div class="order"></div>
      <div class="amount" id="money">
        ￥
        <th:block th:text="${totalPrice+'.00'}"></th:block>
      </div>
      <div class="qrcode-img-wrapper" data-role="qrPayImgWrapper">
        <div data-role="qrPayImg" class="qrcode-img-area">
          <div class="ui-loading qrcode-loading" data-role="qrPayImgLoading"></div>
          <div style="position: relative;display: inline-block;">
            <img
              width="300"
              height="300"
              src="../../static/mall/image/pay/alipay_qrcode.png"
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
            <th:block th:text="${orderNo}"></th:block>
          </h1>
        </div>
        <input type="hidden" id="orderNoValue" th:value="${orderNo}" />
      </div>

      <div class="tip">
        <div class="ico-scan-ali"></div>
        <div class="tip-text">
          <p id="showtext">打开支付宝 [扫一扫]</p>
        </div>
        <div class="tip-text">
          <a onclick="payOrderSuccess()" class="btn btn-small btn-success" title="支付成功">支付成功</a>
        </div>
      </div>

      <div class="tip-text"></div>
    </div>
    <div class="foot"></div>
  </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">

</style>