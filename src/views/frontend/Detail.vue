<template>
  <div id="detail">
    <div class="dc">
      <div class="content w">
        <div class="title fl">商品详情</div>
        <nav class="fr">
          <li>
            <a href="##">概述</a>
          </li>
          <li>|</li>
          <li>
            <a href="##">详情</a>
          </li>
          <li>|</li>
          <li>
            <a href="##">用户评价</a>
          </li>
          <div class="clear"></div>
        </nav>
        <div class="clear"></div>
      </div>
    </div>

    <div class="intro mt20 w clearfix">
      <div class="left fl" style="position: relative;">
        <div class="swiper-container fl">
          <img :src="goodsDetail.goodsCoverImg" />
        </div>
      </div>
      <div class="right fr">
        <div class="h3 ml20 mt20" :text="goodsDetail.goodsName">NewBeeMall</div>
        <div class="sub_title mr40 ml20 mt10" :text="goodsDetail.goodsIntro">NewBeeMall</div>
        <div class="item_price mr40 ml20 mt10">
          {{ goodsDetail.sellingPrice+'.00 元' }}
          <del>{{ goodsDetail.originalPrice+'.00 元' }}</del>
        </div>

        <div class="order">
          <input
            class="car"
            type="button"
            @onclick="saveAndGoCart(goodsDetail.goodsId)"
            value="立即选购"
          />
          <input class="car" type="button" @onclick="saveToCart(goodsDetail.goodsId)" value="加入购物车" />
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
                <img th:src="@{/mall/image/7d.jpg}" />7天无理由
              </a>
            </dd>
          </dl>
          <dl>
            <dt>支付</dt>
            <dd>
              <a href="##" target="_blank">
                <img th:src="@{/mall/image/hua.png}" />蚂蚁花呗
              </a>
              <a href="##" target="_blank">
                <img th:src="@{/mall/image/card.png}" />信用卡支付
              </a>
              <a href="##" target="_blank">
                <img th:src="@{/mall/image/ji.png}" />集分宝
              </a>
            </dd>
          </dl>
          <dl>
            <dt>支持</dt>
            <dd>
              折旧变现，买新更省钱。
              <a style="float:none;text-decoration: underline;" href="##">详情</a>
            </dd>
          </dl>
        </div>
      </div>
      <div class="clear"></div>
    </div>
    <!-- 这里使用的是 th:utext 标签，用 th:text 不会解析 html，用 th:utext 会解析 html -->
    <div class="goods mt20 w clearfix" th:utext="${goodsDetail.goodsDetailContent}"></div>
  </div>
</template>
<script>
import * as api from "@/api/api";

export default {
  name: "Detail",
  data() {
    return {
      goodsDetail:[],
    };
  },
  methods: {
    getList() {
      api.good.detail({ id: 1 }).then(res => {
        console.log(res);
      });
    },
    saveAndGoCart(goodId) {
      api.cart.save({ id: goodId }).then(res => {
        console.log(res);
        this.$router.push({
            path:'/frontend/cart'
        })
      });
    },
    saveToCart(goodId) {
      api.cart.save({ id: goodId }).then(res => {
        console.log(res);
      });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/css/mall/styles/detail.css";
</style>
