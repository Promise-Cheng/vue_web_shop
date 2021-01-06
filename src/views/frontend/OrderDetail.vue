<template>
  <div id="personal" style="height: 800px">
    <div class="self-info center">
      <!-- sidebar -->
      <personal-sidebar></personal-sidebar>
      <div class="intro fr">
        <div class="uc-box uc-main-box">
          <div class="uc-content-box order-view-box">
            <div class="box-hd">
              <h1 class="title">
                订单详情
                <small>
                  请谨防钓鱼链接或诈骗电话，
                  <!--                  <a href="##">了解更多&gt;</a>-->
                </small>
              </h1>
              <div class="more clearfix">
                <h2 class="subtitle">
                  订单号：
                  {{ orderDetailVO.orderNo }}
                  <span class="tag tag-subsidy"></span>
                </h2>
                <div class="actions">
                  <input type="hidden" id="orderNoValue" :value="orderDetailVO.orderNo"/>
                  <template v-if="orderDetailVO.orderStatus>0 && orderDetailVO.orderStatus<3">
                    <a @click="cancelOrder()" class="btn btn-small btn-line-gray" title="取消订单">取消订单</a>
                  </template>
                  <template v-if="orderDetailVO.orderStatus===0">
                    <a @click="payOrder()" class="btn btn-small btn-primary" title="去支付">去支付</a>
                  </template>
                  <template v-if="orderDetailVO.orderStatus===3">
                    <a @click="finishOrder()" class="btn btn-small btn-primary" title="确认收货">确认收货</a>
                  </template>
                </div>
              </div>
            </div>
            <div class="box-bd">
              <div class="uc-order-item uc-order-item-pay">
                <div class="order-detail">
                  <div class="order-summary">
                    <div class="order-status">{{ orderDetailVO.orderStatusString }}</div>
                    <div class="order-desc">
                      <template v-if="orderDetailVO.orderStatus===0">请尽快完成支付哦~</template>
                      <template v-if="orderDetailVO.orderStatus===1">newbee商城订单确认中~</template>
                      <template v-if="orderDetailVO.orderStatus===2">newbee仓库正在紧急配货中~</template>
                      <template v-if="orderDetailVO.orderStatus===3">订单已出库正在快马加鞭向您奔来~</template>
                      <template v-if="orderDetailVO.orderStatus===4">交易成功，感谢您对newbee商城的支持~</template>
                      <template v-if="orderDetailVO.orderStatus===5">交易已关闭~</template>
                    </div>
                    <template v-if="orderDetailVO.orderStatus>=0">
                      <div class="order-progress">
                        <ol class="progress-list clearfix progress-list-5">
                          <li
                            :class="orderDetailVO.orderStatus===0?'step step-active':'step step-first'"
                          >
                            <div class="progress">
                              <span class="text">下单</span>
                            </div>
                            <div
                              class="info"
                            >{{ showCreateTime }}
                            </div>
                          </li>
                          <li
                            :class="orderDetailVO.orderStatus<1?'step'
                                                    :orderDetailVO.orderStatus===1?'step step-active':'step step-done'"
                          >
                            <div class="progress">
                              <span class="text">付款</span>
                            </div>
                            <div class="info"></div>
                          </li>
                          <li
                            :class="orderDetailVO.orderStatus<2?'step'
                                                    :orderDetailVO.orderStatus===2?'step step-active':'step step-done'"
                          >
                            <div class="progress">
                              <span class="text">配货</span>
                            </div>
                            <div class="info"></div>
                          </li>
                          <li
                            :class="orderDetailVO.orderStatus<3?'step'
                                                    :orderDetailVO.orderStatus===3?'step step-active':'step step-done'"
                          >
                            <div class="progress">
                              <span class="text">出库</span>
                            </div>
                            <div class="info"></div>
                          </li>
                          <li
                            :class="orderDetailVO.orderStatus<4?'step'
                             :orderDetailVO.orderStatus===4?'step step-active':'step step-last'">
                            <div class="progress">
                              <span class="text">交易成功</span>
                            </div>
                            <div class="info"></div>
                          </li>
                        </ol>
                      </div>
                    </template>
                  </div>
                  <table class="order-items-table">
                    <tbody>
                    <template v-for="(item,index) in orderDetailVO.newBeeMallOrderItemVOS">
                      <tr :key="`user${index}`">
                        <td class="col col-thumb">
                          <div class="figure figure-thumb">
                            <a @click="gotoPageById(item.goodsId)">
                              <img :src="prefix(item.goodsCoverImg)" width="80" height="80" alt/>
                            </a>
                          </div>
                        </td>
                        <td class="col col-name">
                          <p class="name">
                            <a @click="gotoPageById(item.goodsId)">{{ item.goodsName }}</a>
                          </p>
                        </td>
                        <td class="col col-price">
                          <p
                            class="price"
                          >{{ item.sellingPrice+'元 x '+item.goodsCount }}</p>
                        </td>
                        <td class="col col-actions"></td>
                      </tr>
                    </template>
                    </tbody>
                  </table>
                </div>
                <div id="editAddr" class="order-detail-info">
                  <h3>收货信息</h3>
                  <tbody>
                  <tr>
                    <th>收货地址：</th>
                    <td>{{ orderDetailVO.userAddress }}
                    </td>
                  </tr>
                  </tbody>
                  <div class="actions"></div>
                </div>
                <div id="editTime" class="order-detail-info">
                  <h3>支付方式</h3>
                  <table class="info-table">
                    <tbody>
                    <tr>
                      <th>支付方式：</th>
                      <td>{{orderDetailVO.payTypeString==null?'在线支付':orderDetailVO.payTypeString}}
                      </td>
                    </tr>
                    </tbody>
                  </table>
                  <div class="actions"></div>
                </div>
                <div class="order-detail-total">
                  <table class="total-table">
                    <tbody>
                    <tr>
                      <th>运费：</th>
                      <td>
                        <span class="num">0</span>元
                      </td>
                    </tr>
                    <tr>
                      <th class="total">商品总价：</th>
                      <td class="total">
                        <span class="num">{{orderDetailVO.totalPrice+'.00'}}</span>元
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
  import * as api from '@/api/api'
  import PersonalSidebar from "@/components/PersonalSidebar";
  import moment from "moment"
  import * as tips from "@/helper/Tips";
  import confirm from "ant-design-vue/lib/modal/confirm";

  export default {
    name: "OrderDetail",
    components: {PersonalSidebar},
    data() {
      return {
        orderDetailVO: {
          createTime: null,
          orderNo: null,//订单号
          orderStatus: null,//订单状态
          orderStatusString: null, //状态名称
          userAddress: null,//收货地址
          payTypeString: null,//支付方式
          totalPrice: null,//总计
          newBeeMallOrderItemVOS: [], //订单项
        },
      };
    },
    mounted() {
      this.getOrderDetail(this.$route.query.id)
    },
    computed: {
      showCreateTime() {
        if (this.orderDetailVO.createTime)
          return moment(this.orderDetailVO.createTime).format('yyyy-MM-dd HH:mm:ss');
        return null;
      }
    },
    methods: {
      async getAddress(){
        const addressDetail = await api.address.getDefaultAddress()
        this.$set(this.orderDetailVO,'userAddress',addressDetail.data.detailAddress)
      },
      getOrderDetail(id) {
        api.order.getOrderDetail(id).then(res => {
          this.orderDetailVO = res.data
          this.getAddress()
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
      cancelOrder() {
        confirm({
          title: '提示',
          content: '该操作将会取消订单,确认取消？',
          okText: '确定',
          okType: 'primary',
          cancelText: '取消',
          onOk:() => {
            api.order.cancelOrder(this.$route.query.id).then(res=>{
              tips.notice2('提示','成功取消订单','success')
            })
            this.getOrderDetail()
          },
          onCancel() {
            console.log('Cancel');
          },
        });
      },
      payOrder() {
        this.$router.push({
          path:'/frontend/select-pay',
          query: {
            id: this.$route.query.id
          }
        })
      },
      finishOrder() {
      }
    }
  };
</script>
<style scoped>
  @import "../../assets/css/mall/styles/order-detail.css";
</style>
