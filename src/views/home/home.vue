<template>
  <div class="headone">
    <div class="home">
      <Navbar>
        <template v-slot:left> </template>
        <template v-slot:center> 购物街 </template>
        <template v-slot:right> </template>
      </Navbar>
    </div>
    <home-swiper :banner="banner" class="head"></home-swiper>
    <recommend :recommend="recommend"></recommend>
    <fature-view></fature-view>
    <tab-control
      :title="['流行', '新款', '精选']"
      class="tab-control"
      @tabclick="tabclick"
    ></tab-control>
    <goods :goodslist="showgoods"></goods>
  </div>
</template>

<script>
import Navbar from "../../components/common/navbar/Navbar.vue";
import TabControl from "../../components/content/tabcontrol/TabControl.vue";
import goods from "../../components/content/goods/goods.vue";

import HomeSwiper from "./childcomps/HomeSwiper.vue";
import Recommend from "./childcomps/Recommend.vue";
import FatureView from "./childcomps/fatureview.vue";

import { gethomemultidata, gethomegoods } from "../../network/home";
export default {
  name: "home",
  components: {
    Navbar,
    TabControl,
    goods,

    HomeSwiper,
    Recommend,
    FatureView,
  },
  data() {
    return {
      banner: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currtype:'pop',
    };
  },
  created() {
    this.gethomemultidata();
    this.gethomegoods("pop");
    this.gethomegoods("new");
    this.gethomegoods("sell");
  },
  computed: {
    showgoods(){
return this.goods[this.currtype].list
    }
  },
  methods: {
    tabclick(index) {
      this.currtype=(index<1)?'pop':(index==1)?'new':'sell';
    },
    // 网络请求
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
      });
    },
  },
};
</script>

<style>
.home {
  background-color: #ea68a2;
  color: aliceblue;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 999;
}
.headone {
  height: 10000px;
}
.head {
  margin-top: 44px;
}
.tab-control {
  position: sticky;
  top: 44px;
  background-color: #fff;
}
</style>