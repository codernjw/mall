<template>
  <div class="headone">
    <div class="home">
      <Navbar class="li">
        <template v-slot:left> </template>
        <template v-slot:center> 购物街 </template>
        <template v-slot:right> </template>
      </Navbar>
      <tab-control
        :title="['流行', '新款', '精选']"
        @tabclick="tabclick"
        ref="tabcontrol1"
        v-show="istabfixed"
        class="fixedd"
      ></tab-control>
    </div>
    <scroll
      class="gun"
      ref="scroll"
      :position="3"
      @scroll="conitscroll"
      :pullupload="true"
      @upload="loadmore"
    >
      <home-swiper
        :banner="banner"
        class="head"
        @swiperimageload="swiperimageload"
      ></home-swiper>
      <recommend :recommend="recommend" ref="goods"></recommend>
      <fature-view></fature-view>
      <tab-control
        :title="['流行', '新款', '精选']"
        @tabclick="tabclick"
        ref="tabcontrol2"
      ></tab-control>
      <goods :goodslist="showgoods"></goods>
    </scroll>
    <back-top @click="backclick" v-show="top"></back-top>
  </div>
</template>

<script>
import Navbar from "../../components/common/navbar/Navbar.vue";
import TabControl from "../../components/content/tabcontrol/TabControl.vue";
import goods from "../../components/content/goods/goods.vue";
import scroll from "../../components/common/scroll/scroll.vue";
// import BackTop from "../../components/content/backtop/BackTop.vue";

import HomeSwiper from "./childcomps/HomeSwiper.vue";
import Recommend from "./childcomps/Recommend.vue";
import FatureView from "./childcomps/fatureview.vue";

import { gethomemultidata, gethomegoods} from "../../network/home";
import {backtop} from '../../common/mixin'
export default {
  name: "home",
  components: {
    Navbar,
    TabControl,
    goods,
    scroll,
    // BackTop,

    HomeSwiper,
    Recommend,
    FatureView,
  },
  mixins: [backtop],
  data() {
    return {
      banner: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currtype: "pop",
      // top: false,
      taboffsettop: "",
      istabfixed: false,
      savey: 0,
    };
  },
  created() {
    this.gethomemultidata();
    this.gethomegoods("pop");
    this.gethomegoods("new");
    this.gethomegoods("sell");
  },
  computed: {
    showgoods() {
      return this.goods[this.currtype].list;
    },
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.savey, 1);
    this.$refs.scroll.scroll.refresh();
  },
  deactivated() {
    this.savey = this.$refs.scroll.scroll.y;
  },
  methods: {
    tabclick(index) {
      this.currtype = index < 1 ? "pop" : index == 1 ? "new" : "sell";
      this.$refs.tabcontrol1.apple = index;
      this.$refs.tabcontrol2.apple = index;
    },
    gethomemultidata() {
      gethomemultidata().then((res) => {
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    },
    gethomegoods(type) {
      const page = this.goods[type].page + 1;
      gethomegoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.finishpull();
      });
    },
    // backclick() {
    //   this.$refs.scroll.scrollTo(0, 0, 500);
    // },
    conitscroll(position) {
      // console.log(position);
      // position.y <= -1000 ? (this.top = true) : (this.top = false);
      this.topmixin(position);
      this.istabfixed = -position.y >= this.taboffsettop + 44;
      // console.log(this.istabfixed);
    },
    loadmore() {
      this.gethomegoods(this.currtype);
    },
    swiperimageload() {
      this.taboffsettop = this.$refs.tabcontrol2.$el.offsetTop;
      //  console.log(this.taboffsettop);
    },
  },
};
</script>

<style>
.home {
  color: aliceblue;
  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 999; */
}
.li {
  background-color: #ea68a2;
}
.headone {
  height: 100vh;
  position: relative;
}
.head {
  margin-top: 44px;
}
.gun {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
.fixedd {
  position: relative;
  z-index: 9;
}
</style>