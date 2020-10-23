<template>
  <div id="personal" style="height:800px">
    <div class="self-info center">
      <!-- sidebar -->
      <personal-sidebar></personal-sidebar>

      <div class="intro fr">
        <div class="uc-box uc-main-box">
          <div class="uc-content-box order-view-box">
            <div class="box-hd">
              <h1 class="title">填写并核对订单信息</h1>
              <div class="more clearfix">
                <div class="actions">
                  <a id="saveOrder" class="btn btn-small btn-primary" title="提交订单">提交订单</a>
                </div>
              </div>
            </div>
            <div class="box-bd">
              <div class="uc-order-item uc-order-item-pay">
                <div class="order-detail">
                  <div class="order-summary">
                    <div class="order-progress">
                      <ol class="progress-list clearfix progress-list-5">
                        <li class="step step-done">
                          <div class="progress">
                            <span class="text">购物车</span>
                          </div>
                          <div class="info"></div>
                        </li>
                        <li class="step step-active">
                          <div class="progress">
                            <span class="text">下单</span>
                          </div>
                          <div class="info"></div>
                        </li>
                        <li class="step">
                          <div class="progress">
                            <span class="text">付款</span>
                          </div>
                          <div class="info"></div>
                        </li>
                        <li class="step">
                          <div class="progress">
                            <span class="text">出库</span>
                          </div>
                          <div class="info"></div>
                        </li>
                        <li class="step">
                          <div class="progress">
                            <span class="text">交易成功</span>
                          </div>
                          <div class="info"></div>
                        </li>
                      </ol>
                    </div>
                  </div>
                  <table class="order-items-table">
                    <tbody>
                      <template v-for="(item,index) in myShoppingCartItems">
                        <tr :key="`user${index}`">
                          <td class="col col-thumb">
                            <div class="figure figure-thumb">
                              <a target="_blank" :href="'/goods/detail/'+item.goodsId">
                                <img :src="item.goodsCoverImg" width="80" height="80" alt />
                              </a>
                            </div>
                          </td>
                          <td class="col col-name">
                            <p class="name">
                              <a
                                target="_blank"
                                :href="'/goods/detail/'+item.goodsId"
                                :text="item.goodsName"
                              >newbee</a>
                            </p>
                          </td>
                          <td class="col col-price">
                            <p
                              class="price"
                              :text="item.sellingPrice+'元 x '+item.goodsCount"
                            >1299元 × 1</p>
                          </td>
                          <td class="col col-actions"></td>
                        </tr>
                      </template>
                    </tbody>
                  </table>
                </div>
                <div id="editAddr" class="order-detail-info">
                  <h3>收货信息</h3>
                  <table class="info-table">
                    <tbody>
                      <tr>
                        <th>收货地址：</th>
                        <td
                          class="user_address_label"
                          :text="$store.state.user.address==''?'无':$store.state.user.address"
                        >newbee</td>
                      </tr>
                    </tbody>
                  </table>
                  <div class="actions">
                    <a class="btn btn-small btn-line-gray J_editAddr" @click="openUpdateModal();">修改</a>
                  </div>
                </div>
                <div id="editTime" class="order-detail-info">
                  <h3>支付方式</h3>
                  <table class="info-table">
                    <tbody>
                      <tr>
                        <th>支付方式：</th>
                        <td>在线支付</td>
                      </tr>
                    </tbody>
                  </table>
                  <div class="actions"></div>
                </div>
                <div class="order-detail-total">
                  <table class="total-table">
                    <tbody>
                      <tr>
                        <th>商品总价：</th>
                        <td>
                          <span class="num" :text="priceTotal+'.00'">1299.00</span>元
                        </td>
                      </tr>
                      <tr>
                        <th>运费：</th>
                        <td>
                          <span class="num">0</span>元
                        </td>
                      </tr>
                      <tr>
                        <th class="total">应付金额：</th>
                        <td class="total">
                          <span class="num" :text="priceTotal+'.00'">1299.00</span>元
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>
<script>
import PersonalSidebar from "@/components/PersonalSidebar";
export default {
  name: "OrderSettle",
  components: { PersonalSidebar },
  data() {
    return {
      myShoppingCartItems: [],
      priceTotal: ""
    };
  },
  methods: {
    openUpdateModal() {}
  }
};
</script>
<style scoped>
/* @import "../../assets/css/mall/styles/order-settle.css"; */
@import "../../assets/css/mall/styles/order-detail.css";
</style>