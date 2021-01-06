<template>
  <div>
    <div class="classify">
      <div class="category">
        <div class="category_bar">
          <template v-if="goodsCategoryId !==null">
            <div class="fm c">
              <a class="qqq">{{ searchPageCategoryVO.categoryName }}</a>
            </div>
            <i>
              <img src="../../assets/images/search/right-@1x.png" alt/>
            </i>
            <div class="findword">" {{ searchPageCategoryVO.currentName }} "</div>
          </template>
          <template v-else-if="keyword!==null && keyword !==''">
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
                <img :src="prefix(goods.goodsCoverImg)" :alt="goods.goodsName"/>
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
        <a-pagination v-model="current" :total="pageResult.totalCount" :show-total="total => `共 ${total} 条数据`"
                      show-less-items @change="currentChange"/>
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
        pageResult: {
          list: [],
          currPage: 1,
          totalPage: 10,
          totalCount: 0
        },
        goodsCategoryId: null,
        orderBy: null
      };
    },
    mounted() {
      this.keyword = this.$route.query.keyword;
      this.goodsCategoryId = this.$route.query.categoryId
      this.searchPageCategoryVO = {
        categoryName:this.$route.query.categoryName,
        currentName:this.$route.query.currentName
      }
      this.getList();
    },
    methods: {
      categoryChange(id) {
        this.goodsCategoryId = id
        this.resetCurrent();
        this.getList()
      },
      getDetail(id) {
        this.$router.push({
          path: '/frontend/detail',
          query: {
            id: id
          }
        })
      },
      resetCurrent() {
        this.current = 1;
      },
      currentChange() {
        this.getList()
      },
      OnSortChoose(activeName) {
        this.resetCurrent();
        this.orderBy = activeName
      },
      getList() {
        api.good
          .search({
            keyword: this.keyword,
            orderBy: this.orderBy,
            pageNumber: this.current,
            goodsCategoryId: this.goodsCategoryId
          })
          .then(res => {
            this.pageResult = res.data
          });
      }
    },
    watch: {
      '$route.query.keyword': {
        handler: function (val) {
          this.keyword = val;
          this.resetCurrent();
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
