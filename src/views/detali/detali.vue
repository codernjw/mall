<template>
  <div class="lmy">
    <detalinavbar
      class="detali-bar"
      @titleclick="tmclick"
      ref="nav"
    ></detalinavbar>
    <!-- <div>{{this.$store.state.cartlist}}</div> -->
    <scroll class="content" ref="scroll" @scroll="contentscorll" :position="3">
      <detaliswiper :topimage="topimage"></detaliswiper>
      <detalibaseinfo :goods="goods"></detalibaseinfo>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info
        :detail-info="detailInfo"
        @imageload="imageload"
      ></detail-goods-info>
      <detail-param-info
        :param-info="goodsparam"
        ref="paraminfo"
      ></detail-param-info>
      <detail-comment-info
        :comment-info="commentinfo"
        ref="commentinfo"
      ></detail-comment-info>
      <detail-recommend-info
        :recommend-list="recommendList"
        ref="recommendinfo"
      ></detail-recommend-info>
    </scroll>
    <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
    <back-top @click="backclick" v-show="top"></back-top>
    <toast :message='message' :isshow='isshow'></toast>
  </div>
</template>

<script>
import scroll from "../../components/common/scroll/scroll.vue";
import detalinavbar from "../detali/childcomps/detalinavbar.vue";
import detaliswiper from "./childcomps/detaliswiper.vue";
import detalibaseinfo from "./childcomps/detalibaseinfo.vue";
import DetailShopInfo from "./childcomps/DetailShopInfo.vue";
import DetailGoodsInfo from "./childcomps/DetailGoodsInfo.vue";
import DetailParamInfo from "./childcomps/DetailParamInfo.vue";
import DetailCommentInfo from "./childcomps/DetailCommentInfo.vue";
import DetailRecommendInfo from "./childcomps/DetailRecommendInfo.vue";
import DetailBottomBar from "./childcomps/DetailBottomBar.vue";
import Toast from '../../components/common/toast/Toast.vue'

import {
  getdetali,
  Goods,
  GoodsParam,
  Shop,
  comment,
  getRecommend,
} from "../../network/detali";

import { debouce } from "../../common/uuntils";
import { backtop } from "../../common/mixin.js";

export default {
  name: "detali",
  components: {
    detalinavbar,
    detaliswiper,
    detalibaseinfo,
    DetailShopInfo,
    scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailRecommendInfo,
    DetailBottomBar,
    Toast,
  },
  mixins: [backtop],
  data() {
    return {
      iid: null,
      topimage: [],
      goods: {},
      shop: {},
      detailInfo: {},
      goodsparam: {},
      commentinfo: {},
      recommendList: [],
      themetopys: [],
      getthemetopys: null,
      index: 0,
      message:'',
      isshow:'false',
    };
  },

  methods: {
    tmclick(index) {
      // console.log(index);
      this.$refs.scroll.scrollTo(0, -this.themetopys[index], 500);
    },
    imageload() {
      // console.log('+++');
      this.$refs.scroll.scroll.refresh();
      this.getthemetopys();
    },
    contentscorll(position) {
      // console.log(position);
      this.topmixin(position);
      const positionY = position.y;
      // console.log(position);
      for (let index = 0; index < this.themetopys.length; index++) {
        if (
          this.index !== index &&
          ((index < this.themetopys.length - 1 &&
            -positionY >= this.themetopys[index] &&
            -positionY < this.themetopys[index + 1]) ||
            -positionY >= this.themetopys[index])
        ) {
          this.index = index;
          this.$refs.nav.currentindex = this.index;
        }
      }
    },
    addToCart() {
      const obj = {};
      obj.image = this.topimage[0];
      obj.title = this.goods.title;
      obj.desc = this.goods.desc;
      obj.price = this.goods.realPrice;
      obj.iid = this.iid;
      // console.log(obj);
      this.$store.dispatch("addcart", obj).then((res)=>{
        this.message = res;
        this.isshow = true;
        setTimeout(()=>{
         this.isshow = false
         this.message='';
        },1500)
        // console.log(res);
      })
      // console.log(this.$store.state.cartlist);
    },
  },
  created() {
    this.iid = this.$route.params.iid;
    getdetali(this.iid).then((res) => {
      const data = res.result;
      this.topimage = data.itemInfo.topImages;
      // console.log(res);
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      //    console.log(this.goods);
      this.shop = new Shop(data.shopInfo);
      // console.log(this.shop);
      this.detailInfo = data.detailInfo;
      this.goodsparam = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      if (data.rate.crate !== 0) {
        this.commentinfo = new comment(data.rate.list);
      }
    });
    getRecommend().then((res) => {
      this.recommendList = res.data.list;
      // console.log(this.recommendList);
      // console.log(res);
    });
    this.getthemetopys = debouce(() => {
      this.themetopys = [];
      this.themetopys.push(0);
      this.themetopys.push(this.$refs.paraminfo.$el.offsetTop);
      this.themetopys.push(this.$refs.commentinfo.$el.offsetTop);
      this.themetopys.push(this.$refs.recommendinfo.$el.offsetTop);
      // console.log(this.themetopys);
    }, 1000);
  },
};
</script>

<style>
.lmy {
  height: 100vh;
}
.detali-bar {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.content {
  height: calc(100% - 44px - 558px);
}
</style>