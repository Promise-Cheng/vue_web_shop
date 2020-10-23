<template>
<div>
    <div id="personal">
    <div class="self-info center">
      <!-- sidebar -->
      <!-- <div th:replace="mall/personal-sidebar::sidebar-fragment"></div> -->
      <personal-sidebar :is-order="true"></personal-sidebar>
      <div class="intro fr">
        <div class="uc-box uc-main-box">
          <div class="uc-content-box order-list-box">
            <div class="box-hd">
              <h1 class="title">我的订单
                <small>请谨防钓鱼链接或诈骗电话，
                  <a href="##">了解更多&gt;</a>
                </small>
              </h1>
            </div>
            <div class="box-bd">
              <div id="J_orderList">
                <ul class="order-list">
                    <template v-if="orderPageResult.list.length!==0">
                      <template v-for="(order,index) in orderPageResult.list">
                      <li class="uc-order-item uc-order-item-list" :key="`user${index}`">
                        <div class="order-detail">
                          <div class="order-summary">
                              <div class="order-status-closed" v-if="order.orderStatus<0"></div>
                              <div class="order-status-need-pay" v-if="order.orderStatus===0"></div>
                              <div class="order-status-success" v-if="order.orderStatus>0"></div>
                                {{ ' '+order.orderStatusString }}
                          </div>
                        </div>
                        <table class="order-detail-table">
                          <thead>
                          <tr>
                            <th class="col-main"><p class="caption-info"
                                                    :text="dates.format(order.createTime, 'yyyy-MM-dd HH:mm:ss')">
                              02月07日<span
                              class="sep">|</span>订单号：<a
                              href="##"
                              :text="order.orderNo">201908121807</a><span
                              class="sep">|</span>在线支付</p></th>
                            <th class="col-sub"><p class="caption-price">应付金额：<span
                              class="num"
                              :text="order.totalPrice+'.00'">1299.00</span>元
                            </p></th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr>
                            <td class="order-items">
                              <ul class="goods-list">
                                <template v-for="(item,index) in order.newBeeMallOrderItemVOS">
                                  <li :key="`user${index}`">
                                    <div class="figure figure-thumb">
                                      <a target="_blank"
                                         :href="'/goods/detail/'+item.goodsId">
                                        <img :src="item.goodsCoverImg"
                                             width="80" height="80" alt="">
                                      </a>
                                    </div>
                                    <p class="name"><a target="_blank"
                                                       :href="'/goods/detail/'+item.goodsId"
                                                       :text="item.goodsName">newbee</a>
                                    </p>
                                    <p class="price"
                                       :text="item.sellingPrice+'元 x '+item.goodsCount">
                                      13元 × 1</p></li>
                                </template>
                              </ul>
                            </td>
                            <td class="order-actions"><a class="btn btn-small btn-line-gray"
                                                         :href="'/orders/'+order.orderNo">订单详情</a>
                            </td>
                          </tr>
                          </tbody>
                        </table>
                      </li>
                      </template>
                    </template>
                    <!-- todo 无订单时 换背景图为无订单 -->
                      <template v-if="orderPageResult.list.length===0">
                        <div class="list center">
                <!-- todo 无购物项时 换背景图 -->
                            无数据
                        </div>
                      </template>
                </ul>
              </div>
            </div>
            <div id="J_orderListPages">
              <div class="newbee-pagenavi">
                <template v-if="orderPageResult.currPage-2 >=1">
                  <a
                    class="numbers"
                    :href="'/orders?page=' + orderPageResult.currPage-2"
                    :text="orderPageResult.currPage -2">1</a>
                </template>
                <template v-if="orderPageResult.currPage-1 >=1">
                  <a
                  class="numbers"
                  :href="'/orders?page=' + orderPageResult.currPage-1"
                  :text="orderPageResult.currPage -1">1</a>
                </template>
                <a href="##" class="numbers current" :text="orderPageResult.currPage">1</a>
                <template v-if="orderPageResult.currPage+1<=orderPageResult.totalPage">
                  <a
                  class="numbers"
                  :href="'/orders?page=' + orderPageResult.currPage+1"
                  :text="orderPageResult.currPage +1">1</a>
                </template>
                <template v-if="orderPageResult.currPage+2<=orderPageResult.totalPage">
                  <a
                  class="numbers"
                  :href="'/orders?page=' + orderPageResult.currPage+2"
                  :text="orderPageResult.currPage +2">1</a>
                </template>
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
import PersonalSidebar from "@/components/PersonalSidebar"
  export default {
    name: 'MyOrder',
    components:{PersonalSidebar},
    data() {
      return {
        orderPageResult:{
          list:[],
        }
      }
    }
  }
</script>
<style scoped>
  @import "../../assets/css/mall/styles/my-orders.css";

</style>
