<template>
  <div id="detail">
    <div class="dc">
      <div class="content w">
        <div class="title fl">商品详情</div>
        <div class="clear"></div>
      </div>
    </div>

    <div class="intro mt20 w clearfix">
      <div class="left fl" style="position: relative;">
        <div class="swiper-container fl">
          <img :src="prefix(goodsDetail.goodsCoverImg)"/>
        </div>
      </div>
      <div class="right fr">
        <div class="h3 ml20 mt20">{{ goodsDetail.goodsName }}</div>
        <div class="sub_title mr40 ml20 mt10">{{ goodsDetail.goodsIntro }}</div>
        <div class="item_price mr40 ml20 mt10">
          {{ goodsDetail.sellingPrice+'.00 元' }}
          <del>{{ goodsDetail.originalPrice+'.00 元' }}</del>
        </div>
        <div class="order">
          <input
            class="car"
            type="button"
            @click="saveAndGoCart(goodsDetail.goodsId)"
            value="立即选购"
          />
          <input class="car" type="button" @click="saveToCart(goodsDetail.goodsId)" value="加入购物车"/>
        </div>
        <div class="tb-extra ml20" id="J_tbExtra">
          <dl>
            <dt>承诺</dt>
            <dd>
              <a
                class="J_Cont"
                title="满足7天无理由退换货申请的前提下，包邮商品需要买家承担退货邮费，非包邮商品需要买家承担发货和退货邮费。"
                href="#"
                target="_blank"
              >
                <img th:src="@{/mall/image/7d.jpg}"/>7天无理由
              </a>
            </dd>
          </dl>
          <dl>
            <dt>支付</dt>
            <dd>
              <a target="_blank">
                <img src="../../assets/images/hua.png"/>蚂蚁花呗
              </a>
              <a target="_blank">
                <img src="../../assets/images/card.png"/>信用卡支付
              </a>
              <a target="_blank">
                <img src="../../assets/images/ji.png"/>集分宝
              </a>
            </dd>
          </dl>
          <dl>
            <dt>支持</dt>
            <dd>
              折旧变现，买新更省钱。
              <a style="float:none;text-decoration: underline;">详情</a>
            </dd>
          </dl>
        </div>
      </div>
      <div class="clear"></div>
    </div>
    <div class="goods mt20 w clearfix" style="margin-left:400px" v-html="goodsDetail.goodsDetailContent"></div>
  </div>
</template>
<script>
  import * as api from "@/api/api";
  import * as tips from "@/helper/Tips";

  import confirm from 'ant-design-vue/es/modal/confirm'

  export default {
    name: "Detail",
    data() {
      return {
        goodsDetail: {}
      };
    },
    mounted() {
      this.getList(this.$route.query.id);
    },
    methods: {
      getList(goodId) {
        api.good.detail({id: goodId}).then(res => {
          console.log(res);
          this.goodsDetail = res.data;
        });
      },
      saveAndGoCart(goodId) {
        api.cart.save({goodsId: goodId, goodsCount: 1}).then(res => {});
        confirm({
          title: '提示',
          content: '已将商品加入购物车',
          okText: '去结算',
          okType: 'primary',
          cancelText: '留在当前页',
          onOk:() => {
            this.$router.push({
              path: '/frontend/cart'
            });
          },
          onCancel() {
            console.log('Cancel');
          },
        });
      },
      saveToCart(goodId) {
        api.cart.save({goodsId: goodId, goodsCount: 1}).then(res => {
          tips.notice2("提示", "成功加入购物车。", "info");
        });
      }
    }
  };
</script>
<style lang="scss" scoped>
  @import "../../assets/css/mall/styles/detail.css";
</style>
