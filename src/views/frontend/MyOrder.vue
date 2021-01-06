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
                              <th class="col-main"><p class="caption-info">
                                {{ parseTime(order.createTime) }}<span
                                class="sep">|</span>订单号：<a
                              >{{order.orderNo}}</a><span
                                class="sep">|</span>在线支付</p></th>
                              <th class="col-sub"><p class="caption-price">应付金额：<span
                                class="num">{{ order.totalPrice+'.00' }}</span>元
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
                                        <a @click="gotoPageById(item.goodsId)">
                                          <img :src="prefix(item.goodsCoverImg)"
                                               width="80" height="80" alt="">
                                        </a>
                                      </div>
                                      <p class="name"><a @click="gotoPageById(item.goodsId)">{{ item.goodsName }}</a>
                                      </p>
                                      <p class="price">
                                        {{item.sellingPrice+'元 x '+item.goodsCount}}</p></li>
                                  </template>
                                </ul>
                              </td>
                              <td class="order-actions">
                                <a class="btn btn-small btn-line-gray" @click="gotoDetail(order.orderNo)">订单详情</a>
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
              <a-pagination v-model="pageNumber" :total="orderPageResult.totalCount"
                            :page-size="5"
                            :show-total="total => `共 ${total} 条数据`" show-less-items
                            @change="currentChange"/>
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
  import moment from 'moment'
  import * as api from '@/api/api'

  export default {
    name: 'MyOrder',
    components: {PersonalSidebar},
    data() {
      return {
        orderPageResult: {
          list: [],
        },
        pageNumber: 1,
      }
    },
    mounted() {
      this.getMyOrders()
    },
    methods: {
      currentChange(index) {
        this.pageNumber = index
        this.getMyOrders()
      },
      parseTime(time) {
        return moment(time).format('yyyy-MM-dd HH:mm:ss')
      },
      gotoDetail(id) {
        this.$router.push({
          path: '/frontend/order-detail',
          query: {
            id: id
          }
        })
      },
      gotoPageById(id) {
        this.$router.push({
          path: '/frontend/detail',
          query: {
            id: id,
          }
        })
      },
      getMyOrders() {
        api.order.getAllOrder({pageNumber: this.pageNumber}).then(res => {
          console.log(res)
          this.orderPageResult = res.data
        })
      },
    }
  }
</script>
<style scoped>
  @import "../../assets/css/mall/styles/my-orders.css";

</style>
