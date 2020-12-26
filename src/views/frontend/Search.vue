<template>
  <div>
    <div class="classify">
      <div class="category">
        <div class="category_bar">
          <template v-if="searchPageCategoryVO!==null">
            <div class="fm c">
              <a
                href="##"
                class="qqq"
                :text="searchPageCategoryVO.secondLevelCategoryName"
              >newbee-mall</a>
              <div
                v-for="(thirdLevelCategory,index) in searchPageCategoryVO.thirdLevelCategoryList"
                :key="`user1${index}`"
              >
                <a
                  :href="'/search?goodsCategoryId='+thirdLevelCategory.categoryId"
                  :text="thirdLevelCategory.categoryName"
                >newbee-mall</a>
              </div>
            </div>
            <i>
              <img src="../../assets/images/search/right-@1x.png" alt />
            </i>
            <div class="findword">" {{searchPageCategoryVO.currentCategoryName}} "</div>
          </template>
          <template v-else-if="keyword!==null && keyword !==''">
            <div class="findword">搜索 "{{ keyword }} "</div>
          </template>
        </div>
      </div>
    </div>
    <div class="sort">
      <div class="list">
        <a
          :href="'/search?keyword=' +keyword==null?'':keyword
          +'&goodsCategoryId='+goodsCategoryId==null?'':goodsCategoryId
          +'&orderBy=default'"
        >
          <div :class="(orderBy===null || orderBy==='default')?'active':''">推荐</div>
        </a>
        <a
          :href="
          '/search?keyword='+keyword==null?'':keyword
          +'&goodsCategoryId='+goodsCategoryId==null?'':goodsCategoryId
          +'&orderBy=new'"
        >
          <div :class="orderBy==='new'?'active':''">新品</div>
        </a>
        <a
          :href="'/search?keyword='+keyword==null?'':keyword
          +'&goodsCategoryId='+goodsCategoryId==null?'':goodsCategoryId
          +'&orderBy=price'"
        >
          <div :class="orderBy==='price'?'active':''">价格</div>
        </a>
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
              <a :href="'/goods/detail/'+goods.goodsId" target="_blank">
                <img :src="goods.goodsCoverImg" :alt="goods.goodsName" />
              </a>
            </div>
            <div class="item_brand">
              <a
                :href="'/goods/detail/'+goods.goodsId"
                target="_blank"
                :text="goods.goodsName"
              >newbee.ltd</a>
            </div>
            <div class="item_sub_intro" :text="goods.goodsIntro">newbee.ltd</div>
            <div class="item_price" :text="goods.sellingPrice+'.00元'">1299.00元</div>
          </div>
        </template>
        <div class="clear"></div>
      </div>
      <div class="pages">
        <div class="page_wrap">
          <template v-if="pageResult && pageResult.list.length!==0">
            <span class="page_span1">
              <a
                :href="pageResult.currPage===1?'##':'/search?keyword='
                   +keyword===null?'':keyword
                   +'&page=' + pageResult.currPage-1
                   +'&goodsCategoryId='+goodsCategoryId==null?'':goodsCategoryId
                   +'&orderBy='+orderBy==null?'':orderBy"
              >< 上一页</a>
              <template v-if="pageResult.currPage-2 >=1">
                <a
                  :href="'/search?keyword='+keyword==null?'':keyword
                  +'&page=' + pageResult.currPage-2
                  +'&goodsCategoryId='+goodsCategoryId==null?'':goodsCategoryId
                  +'&orderBy='+orderBy==null?'':orderBy"
                  :text="pageResult.currPage -2"
                >1</a>
              </template>
              <template v-if="pageResult.currPage-1 >=1">
                <a
                  :href="'/search?keyword='+keyword==null?'':keyword
                    +'&page=' + pageResult.currPage-1
                    +'&goodsCategoryId='+goodsCategoryId==null?'':goodsCategoryId
                    +'&orderBy='+orderBy==null?'':orderBy"
                  :text="pageResult.currPage -1"
                >2</a>
              </template>
              <template v-if="pageResult.currPage+1<=pageResult.totalPage">
                <a
                  :href="'/search?keyword='+keyword==null?'':keyword
                    +'&page=' + pageResult.currPage+1
                    +'&goodsCategoryId='+goodsCategoryId==null?'':goodsCategoryId
                    +'&orderBy='+orderBy==null?'':orderBy"
                  :text="pageResult.currPage +1"
                >3</a>
              </template>
              <template v-if="pageResult.currPage+2<=pageResult.totalPage">
                <a
                  :href="'/search?keyword='+keyword==null?'':keyword
                    +'&page=' + pageResult.currPage+2
                    +'&goodsCategoryId='+goodsCategoryId==null?'':goodsCategoryId
                    +'&orderBy='+orderBy==null?'':orderBy"
                  :text="pageResult.currPage +2"
                >4</a>
              </template>
              <a
                :href="pageResult.currPage>=pageResult.totalPage?'##':
                   '/search?keyword='+keyword==null?'':keyword
                   +'&page=' + pageResult.currPage+1
                   +'&goodsCategoryId='+goodsCategoryId==null?'':goodsCategoryId
                   +'&orderBy='+orderBy==null?'':orderBy"
              >下一页 ></a>
            </span>
          </template>
        </div>
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
      keyword:'',
      searchPageCategoryVO: {
        secondLevelCategoryName: null,
        thirdLevelCategoryList: []
      },
      pageResult: {
        list: [],
        currPage: 1,
        totalPage: 10
      },
      goodsCategoryId: null,
      orderBy: null
    };
  },
  mounted(){
    console.log(this.$route.query.keyword);
    this.keyword = this.$route.query.keyword;
    this.getList();
  },
  methods: {
    getList() {
      api.good
        .search({keyword: this.keyword })
        .then(res => {
          this.pageResult = res.data
        });
    }
  }
};
</script>

<style scoped>
@import "../../assets/css/mall/styles/search.css";
</style>
