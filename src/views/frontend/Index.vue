<template>
  <content id="content">
    <div id="banner">
      <div class="all-sort-list">
        <template v-for="(category,index) in categories">
          <div class="item" :key="`user${index}`">
            <h3>
              <span>·</span>
              <a href="##">{{ category.categoryName }}</a>
            </h3>
            <div class="item-list clearfix">
              <div class="subitem" :key="`user1${index}`">
                <template v-for="(secondLevelCategory,index) in category.secondLevelCategoryVOS">
                  <dl class="fore1" :key="`user1${index}`">
                    <dt>
                      <a href="#">{{secondLevelCategory.categoryName}}</a>
                    </dt>
                    <dd>
                      <template
                        v-for="(thirdLevelCategory,index) in secondLevelCategory.thirdLevelCategoryVOS"
                      >
                        <em :key="`user2${index}`">
                          <a
                            :href="'/search?goodsCategoryId='+thirdLevelCategory.categoryId"
                          >{{thirdLevelCategory.categoryName}}</a>
                        </em>
                      </template>
                    </dd>
                  </dl>
                </template>
              </div>
            </div>
          </div>
        </template>
      </div>
      <div>
        <!-- 未配置轮播图则显示默认的三张轮播图 -->
        <a-carousel arrows autoplay>
          <div
            slot="prevArrow"
            slot-scope="props"
            class="custom-slick-arrow"
            style="left: 10px;zIndex: 1"
          >
            <a-icon type="left-circle" />
          </div>
          <div slot="nextArrow" slot-scope="props" class="custom-slick-arrow" style="right: 10px">
            <a-icon type="right-circle" />
          </div>
          <!-- 配置了轮播图则显示后台配置的轮播图 -->
          <template v-if="carousels.length!==0">
            <template v-for="(carousel,index) in carousels">
              <div :key="`user3${index}`">
                <a>
                  <img :src="carousel.carouselUrl" alt="加载失败" />
                </a>
              </div>
            </template>
          </template>
          <template v-else>
            <div>
              <img src="../../assets/images/swiper/banner01.jpg" alt />
            </div>
            <div>
              <img src="../../assets/images/swiper/banner02.jpg" alt />
            </div>
            <div>
              <img src="../../assets/images/swiper/banner03.jpg" alt />
            </div>
          </template>
        </a-carousel>
        <!-- <a-carousel autoplay arrows>
              <div
                slot="prevArrow"
                slot-scope="props"
                class="custom-slick-arrow"
                style="left: 10px;zIndex: 1"
              >
                <a-icon type="left-circle" />
              </div>
              <div
                slot="nextArrow"
                slot-scope="props"
                class="custom-slick-arrow"
                style="right: 10px"
              >
                <a-icon type="right-circle" />
              </div>
              <div>
                <img src="../../assets/images/swiper/banner01.jpg" alt />
              </div>
              <div>
                <img src="../../assets/images/swiper/banner02.jpg" alt />
              </div>
              <div>
                <img src="../../assets/images/swiper/banner03.jpg" alt />
              </div>
        </a-carousel>-->
      </div>
    </div>

    <div id="sub_banner">
      <!-- 已配置热销商品则显示配置内容 -->
      <template v-if="hotGoodses.length!==0">
        <template v-for="(hotGoodse,index) in hotGoodses">
          <div class="hot-image" :key="`user3${index}`">
            <a @click="gotoDetail(hotGoodse.goodsId)">
              <img :src="prefix(hotGoodse.goodsCoverImg)" :alt="hotGoodse.goodsName" />
            </a>
          </div>
        </template>
      </template>
      <!-- 未配置热销商品则显示默认 -->
      <template v-else>
        <div class="hot-image">
          <a href="##">
            <img src="../../assets/images/sub_banner/r4.jpg" alt />
          </a>
        </div>
        <div class="hot-image">
          <a href="##">
            <img src="../../assets/images/sub_banner/hot2.jpg" alt />
          </a>
        </div>
        <div class="hot-image">
          <a href="##">
            <img src="../../assets/images/sub_banner/hot3.jpg" alt />
          </a>
        </div>
        <div class="hot-image">
          <a href="##">
            <img src="../../assets/images/sub_banner/hot4.jpg" alt />
          </a>
        </div>
      </template>
    </div>

    <div id="flash">
      <h2>新品上线</h2>
      <ul>
        <!-- 已配置新品则显示配置内容 -->
        <template v-if="newGoodses.length!==0">
          <template v-for="(newGoods,index) in newGoodses">
            <li :key="`user4${index}`">
              <a @click="gotoDetail(newGoods.goodsId)">
                <img :src="prefix(newGoods.goodsCoverImg)" :alt="newGoods.goodsName" />
                <p class="name">{{ newGoods.goodsName }}</p>
                <p class="discount">{{ newGoods.goodsIntro }}</p>
                <p class="item_price">{{ newGoods.sellingPrice }}</p>
              </a>
            </li>
          </template>
        </template>
        <!-- 未配置则显示默认 -->
        <template v-else>
          <li>
            <a href="##">
              <img src="../../assets/images/sub_banner/m6.jpg" alt />
              <p class="name">华为平板 M6</p>
              <p class="discount">醇香音质 身临其境</p>
              <p class="price">1499元起</p>
            </a>
          </li>
          <li>
            <a href="##">
              <img src="../../assets/images/sub_banner/headphones.jpg" alt />
              <p class="name">蓝牙耳机</p>
              <p class="discount">一键变声 原唱消音</p>
              <p class="price">228元</p>
            </a>
          </li>
          <li>
            <a href="##">
              <img src="../../assets/images/sub_banner/pc.jpg" alt />
              <p class="name">15.6" i3笔记本</p>
              <p class="discount">纤薄机身 金属材质</p>
              <p class="price">3099元起</p>
            </a>
          </li>
          <li>
            <a href="##">
              <img src="../../assets/images/sub_banner/air.jpg" alt />
              <p class="name">空气净化器</p>
              <p class="discount">大空间 快循环</p>
              <p class="price">1099元起</p>
            </a>
          </li>
          <li>
            <a href="##">
              <img src="../../assets/images/sub_banner/baby-car.jpg" alt />
              <p class="name">折叠婴儿推车</p>
              <p class="discount">出发去向往的地方</p>
              <p class="price">649元起</p>
            </a>
          </li>
        </template>
      </ul>
    </div>

    <div id="recommend">
      <h2>为你推荐</h2>
      <a href="##" class="more">查看更多>></a>
      <ul>
        <!-- 已配置推荐商品则显示配置内容 -->
        <template v-if="recommendGoodses.length">
          <template v-for="(recommendGoods,index) in recommendGoodses">
            <li :key="`user5${index}`">
              <a @click="gotoDetail(recommendGoods.goodsId)">
                <div class="info discount">{{recommendGoods.tag}}</div>
                <img :src="prefix(recommendGoods.goodsCoverImg)" :alt="recommendGoods.goodsName" />
                <p class="name">{{ recommendGoods.goodsName }}</p>
                <p class="item_price">{{ recommendGoods.sellingPrice }}</p>
                <p class="counter">猜你喜欢</p>
                <div class="comment">
                  <p>{{recommendGoods.goodsIntro}}</p>
                </div>
              </a>
            </li>
          </template>
        </template>
        <!-- 未配置则显示默认 -->
        <template v-else>
          <li>
            <a href="##">
              <div class="info discount">新品</div>
              <img src="../../assets/images/sub_banner/r1.jpg" alt />
              <p class="name">华为平板 M6</p>
              <p class="price">1499元</p>
              <p class="counter">猜你喜欢</p>
              <div class="comment">
                <p>新蜂精选</p>
                <p>好物也可以不贵</p>
              </div>
            </a>
          </li>
          <li>
            <a href="##">
              <div class="info discount">5折起</div>
              <img src="../../assets/images/sub_banner/r2.jpg" alt />
              <p class="name">华为平板 M6</p>
              <p class="price">1499元</p>
              <p class="counter">猜你喜欢</p>
              <div class="comment">
                <p>新蜂精选</p>
                <p>好物也可以不贵</p>
              </div>
            </a>
          </li>
          <li>
            <a href="##">
              <div class="info discount">新品</div>
              <img src="../../assets/images/sub_banner/r5.jpg" alt />
              <p class="name">华为平板 M6</p>
              <p class="price">1499元</p>
              <p class="counter">猜你喜欢</p>
              <div class="comment">
                <p>新蜂精选</p>
                <p>好物也可以不贵</p>
              </div>
            </a>
          </li>
          <li>
            <a href="##">
              <div class="info discount">官降</div>
              <img src="../../assets/images/sub_banner/m6.jpg" alt />
              <p class="name">华为平板 M6</p>
              <p class="price">1499元</p>
              <p class="counter">猜你喜欢</p>
              <div class="comment">
                <p>新蜂精选</p>
                <p>好物也可以不贵</p>
              </div>
            </a>
          </li>
          <li>
            <a href="##">
              <div class="info discount">新品</div>
              <img src="../../assets/images/sub_banner/r6.jpg" alt />
              <p class="name">华为平板 M6</p>
              <p class="price">1499元</p>
              <p class="counter">猜你喜欢</p>
              <div class="comment">
                <p>新蜂精选</p>
                <p>好物也可以不贵</p>
              </div>
            </a>
          </li>
          <li>
            <a href="##">
              <div class="info discount">热销</div>
              <img src="../../assets/images/sub_banner/r5.jpg" alt />
              <p class="name">华为平板 M6</p>
              <p class="price">1499元</p>
              <p class="counter">猜你喜欢</p>
              <div class="comment">
                <p>新蜂精选</p>
                <p>好物也可以不贵</p>
              </div>
            </a>
          </li>
          <li>
            <a href="##">
              <div class="info discount">享折扣</div>
              <img src="../../assets/images/sub_banner/r4.jpg" alt />
              <p class="name">华为平板 M6</p>
              <p class="price">1499元</p>
              <p class="counter">猜你喜欢</p>
              <div class="comment">
                <p>新蜂精选</p>
                <p>好物也可以不贵</p>
              </div>
            </a>
          </li>
          <li>
            <a href="##">
              <div class="info discount">最低价</div>
              <img src="../../assets/images/sub_banner/r3.jpg" alt />
              <p class="name">华为平板 M6</p>
              <p class="price">1499元</p>
              <p class="counter">猜你喜欢</p>
              <div class="comment">
                <p>新蜂精选</p>
                <p>好物也可以不贵</p>
              </div>
            </a>
          </li>
          <li>
            <a href="##">
              <div class="info discount">热销</div>
              <img src="../../assets/images/sub_banner/r2.jpg" alt />
              <p class="name">华为平板 M6</p>
              <p class="price">1499元</p>
              <p class="counter">猜你喜欢</p>
              <div class="comment">
                <p>新蜂精选</p>
                <p>好物也可以不贵</p>
              </div>
            </a>
          </li>
          <li>
            <a href="##">
              <div class="info discount">热销</div>
              <img src="../../assets/images/sub_banner/r1.jpg" alt />
              <p class="name">华为平板 M6</p>
              <p class="price">1499元</p>
              <p class="counter">猜你喜欢</p>
              <div class="comment">
                <p>新蜂精选</p>
                <p>好物也可以不贵</p>
              </div>
            </a>
          </li>
        </template>
      </ul>
    </div>
  </content>
</template>
<script>
import * as api from "@/api/api";

export default {
  name: "Index",
  data() {
    return {
      categories: [],
      carousels: [],
      hotGoodses: [],
      newGoodses: [],
      recommendGoodses: []
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    gotoDetail(goodsId) {
      this.$router.push({
        path: "/frontend/detail",
        query: {
          id: goodsId
        }
      });
    },
    getList() {
      api.index.getHomeData({}).then(res => {
        let data = _.cloneDeep(res.data);
        this.carousels = data.carousels;
        this.hotGoodses = data.hotGoodses;
        this.newGoodses = data.newGoodses;
        this.recommendGoodses = data.recommendGoodses;
      });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/css/mall/styles/index.css";
</style>
