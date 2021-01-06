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
                              <img :src="prefix(item.goodsCoverImg)" width="80" height="80" alt/>
                            </a>
                          </div>
                        </td>
                        <td class="col col-name">
                          <p class="name">
                            <a @click="gotoPageById(item.goodsId)">{{item.goodsName}}</a>
                          </p>
                        </td>
                        <td class="col col-price">
                          <p class="price">{{item.sellingPrice+'元 x '+item.goodsCount}}</p>
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
                      >{{ !address ?'无':address}}
                      </td>
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
                        <span class="num">{{priceTotal+'.00'}}</span>元
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
                        <span class="num">{{priceTotal+'.00'}}</span>元
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
    <edit-address-modal ref="addressmodal" />
  </div>
</template>
<script>
  import * as api from "@/api/api";
  import PersonalSidebar from "@/components/PersonalSidebar";
  import EditAddressModal from "@/views/frontend/componets/EditAddressModal";
  import * as tips from "@/helper/Tips";

  export default {
    name: "OrderSettle",
    components: {EditAddressModal, PersonalSidebar},
    data() {
      return {
        myShoppingCartItems: [],
        priceTotal: 0,
        addressId: null,
        address: '',
        addressInfo: null,
      };
    },
    mounted() {
      api.cart.getData().then(res => {
        this.myShoppingCartItems = res.data
        this.priceTotal = 0
        _.forEach(this.myShoppingCartItems,item =>{
          this.priceTotal += item.sellingPrice * item.goodsCount
        })
        this.getAddress()
      })
    },
    methods: {
      gotoPageById(id) {
        this.$router.push({
          path: '/frontend/detail',
          query: {
            id: id,
          }
        })
      },
      async getAddress(){
        const addressDetail = await api.address.getDefaultAddress()
        if(addressDetail.data){
          this.address = addressDetail.data.detailAddress
          this.addressId = addressDetail.data.addressId
          this.addressInfo = addressDetail.data
        }
      },
      async openUpdateModal() {
        let option = null
        if(this.addressId){
          option = this.addressInfo
        }
        await this.$refs.addressmodal.showModal(option);
        await this.getAddress();
        tips.notice2('提示','操作成功','success')
      }
    }
  };
</script>
<style scoped>
  /* @import "../../assets/css/mall/styles/order-settle.css"; */
  @import "../../assets/css/mall/styles/order-detail.css";
</style>
