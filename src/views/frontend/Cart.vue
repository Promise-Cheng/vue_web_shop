<template>
    <div id="cart">
    <div class="banner_x center">
        <a @click="gotoOtherPage('/frontend/index')" target="_blank">
            <div class="logo fl">
                <img src="../../assets/images/new-bee-logo-3.png"/>
            </div>
        </a>
        <div class="wdgwc fl ml20">购物车</div>
        <div class="wxts fl ml20">温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</div>
        <div class="clear"></div>
    </div>
    <div class="cart_line"></div>
    <div class="cart_bg">
        <template v-if="myShoppingCartItems.length === 0">
            <div class="list center">
                <!-- todo 无购物项时 换背景图 -->
                无数据
            </div>
        </template>
       <template v-else>
            <div class="list center">
                <div class="top2 center">
                    <div class="sub_top fl">
                    </div>
                    <div class="sub_top fl">商品名称</div>
                    <div class="sub_top fl">单价</div>
                    <div class="sub_top fl">数量</div>
                    <div class="sub_top fl">小计</div>
                    <div class="sub_top fr">操作</div>
                    <div class="clear"></div>
                </div>
                <template v-for="(item,index) in myShoppingCartItems">
                    <div class="content2 center" :key="`user${index}`">
                        <div class="sub_content fl ">
                        </div>
                        <div class="sub_content cover fl"><img :src="item.goodsCoverImg"></div>
                        <div class="sub_content fl ft20" :text="item.goodsName">商品名称</div>
                        <div class="sub_content fl" :text="item.sellingPrice+'元'">1299元</div>
                        <div class="sub_content fl">
                            <input class="goods_count" :id="'goodsCount'+item.cartItemId" type="number"
                                   @onblur="updateItem(item.cartItemId)"
                                   :value="item.goodsCount" step="1" min="1"
                                   max="5">
                        </div>
                        <div class="sub_content fl" :text="item.goodsCount*item.sellingPrice+'元'">1299元</div>
                        <div class="sub_content fl"><a href="##" :onclick="deleteItem(item.cartItemId)">×</a>
                        </div>
                        <div class="clear"></div>
                    </div>
                </template>
            </div>
        </template>
        <div class="pre_order mt20 center">
            <div class="tips fl ml20">
                <ul>
                    <li><a @click="gotoOtherPage('/frontend/index')">继续购物</a></li>
                    <li>|</li>
                    <li>共<span :text="itemsTotal">13</span>件商品</li>
                    <div class="clear"></div>
                </ul>
            </div>
            <div class="order_div fr">
                <div class="order_total fl">合计（不含运费）：<span :text="priceTotal+'.00元'">1299.00元</span></div>
                <div class="order_button fr">
                    <template v-if="itemsTotal === 0">
                        <input class="order_button_c" type="button" name="tip"
                               @click="tip()"
                               value="去结算"/>
                    </template>
                    <template v-else>
                        <input class="order_button_d" type="button" name="settle"
                               @click="settle()"
                               value="去结算"/>
                    </template>
                </div>
                <div class="clear"></div>
            </div>
            <div class="clear"></div>
        </div>
    </div>
</div>
</template>
<script>
import * as tips from '@/helper/Tips'

export default {
    name:"Cart",
    data(){
        return{
            myShoppingCartItems:[],
            itemsTotal: 1,
            priceTotal:'',
        }
    },
    methods:{
        tip(){
            tips.notice2('提示','购物车中无数据，无法结算','info')
        },
        settle(){
            this.$router.push({
                path:'/frontend/order-settle',
            })
        },
        gotoOtherPage(path){
            this.$router.push({
                path:path,
            })
        }
    }
}
</script>
<style lang="scss" scoped>
@import "../../assets/css/mall/styles/cart.css";
</style>
