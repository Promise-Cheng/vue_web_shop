<template>
  <div>
    <div class="classify">
      <div class="category">
        <div class="category_bar">
          <!--          <template v-if="searchPageCategoryVO!==null">-->
          <!--            <div class="fm c">-->
          <!--              <a-->
          <!--                href="##"-->
          <!--                class="qqq"-->
          <!--                :text="searchPageCategoryVO.secondLevelCategoryName"-->
          <!--              >newbee-mall</a>-->
          <!--              <div-->
          <!--                v-for="(thirdLevelCategory,index) in searchPageCategoryVO.thirdLevelCategoryList"-->
          <!--                :key="`user1${index}`"-->
          <!--              >-->
          <!--                <a-->
          <!--                  :href="'/search?goodsCategoryId='+thirdLevelCategory.categoryId"-->
          <!--                  :text="thirdLevelCategory.categoryName"-->
          <!--                >newbee-mall</a>-->
          <!--              </div>-->
          <!--            </div>-->
          <!--            <i>-->
          <!--              <img src="../../assets/images/search/right-@1x.png" alt />-->
          <!--            </i>-->
          <!--            <div class="findword">" {{searchPageCategoryVO.currentCategoryName}} "</div>-->
          <!--          </template>-->
          <template v-if="keyword!==null && keyword !==''">
            <div class="findword">搜索 "{{ keyword }} "</div>
          </template>
        </div>
      </div>
    </div>
    <div class="sort">
      <div class="list">
        <div @click="OnSortChoose('default')">
          <div :class="(orderBy===null || orderBy==='default')?'active':''">推荐</div>
        </div>
        <div @click="OnSortChoose('new')">
          <div :class="orderBy==='new'?'active':''">新品</div>
        </div>
        <div @click="OnSortChoose('price')">
          <div :class="orderBy==='price'?'active':''">价格</div>
        </div>
      </div>
    </div>
    <div class="goods_item center">
      <div class="main center">
        <template v-if="pageResult.list.length===0">未查询到商品</template>
        <template v-else>
          <div
            class="item_card_frame"
            v-for="(goods,index) in pageResult.list"
            :key="`user${index}`"
          >
            <div class="item_card">
              <a @click="getDetail(goods.goodsId)">
                <img :src="goods.goodsCoverImg" :alt="goods.goodsName"/>
              </a>
            </div>
            <div class="item_brand">
              <a @click="getDetail(goods.goodsId)">{{ goods.goodsName }}</a>
            </div>
            <div class="item_sub_intro">{{ goods.goodsIntro }}</div>
            <div class="item_price">{{ goods.sellingPrice+'.00元' }}</div>
          </div>
        </template>
        <div class="clear"></div>
      </div>
      <div class="pages">
        <a-pagination v-model="current" :total="pageResult.totalCount" :show-total="total => `共 ${total} 条数据`" show-less-items @change="currentChange" />
      </div>
    </div>
  </div>
</template>

<script>
  import * as api from "@/api/api";

  export default {
    name: "Search",
    data() {
      return {
        current: 1,
        keyword: '',
        searchPageCategoryVO: {
          secondLevelCategoryName: null,
          thirdLevelCategoryList: []
        },
        pageResult: {
          list: [],
          currPage: 1,
          totalPage: 10,
          totalCount:0
        },
        goodsCategoryId: null,
        orderBy: null
      };
    },
    mounted() {
      this.keyword = this.$route.query.keyword;
      this.getList();
    },
    methods: {
      getDetail(id){
        console.log(id)
      },
      currentChange(){
        this.getList()
      },
      OnSortChoose(activeName) {
        this.orderBy = activeName
      },
      getList() {
        api.good
          .search({keyword: this.keyword, orderBy: this.orderBy, pageNumber:this.current})
          .then(res => {
            this.pageResult = res.data
          });
      }
    },
    watch: {
      '$route.query.keyword': {
        handler: function (val) {
          this.keyword = val;
          this.getList()
        }
      },
      orderBy: {
        handler: function () {
          this.getList()
        }
      }
    }
  };
</script>

<style scoped>
  @import "../../assets/css/mall/styles/search.css";
</style>
