<template>
  <div class="lmy">
    <detalinavbar class="detali-bar" @titleclick="tmclick"></detalinavbar>
    <scroll class="content" ref="scroll">
      <detaliswiper :topimage="topimage"></detaliswiper>
      <detalibaseinfo :goods="goods"></detalibaseinfo>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo"></detail-goods-info>
      <detail-param-info :param-info="goodsparam" ref="paraminfo"></detail-param-info>
      <detail-comment-info :comment-info="commentinfo" ref="commentinfo"></detail-comment-info>
      <detail-recommend-info
        :recommend-list="recommendList"
        ref="recommendinfo"
      ></detail-recommend-info>
    </scroll>
  </div>
</template>

<script>
import scroll from '../../components/common/scroll/scroll.vue'
import detalinavbar from "../detali/childcomps/detalinavbar.vue";
import detaliswiper from "./childcomps/detaliswiper.vue";
import detalibaseinfo from "./childcomps/detalibaseinfo.vue";
import DetailShopInfo from "./childcomps/DetailShopInfo.vue";
import DetailGoodsInfo from "./childcomps/DetailGoodsInfo.vue";
import DetailParamInfo from "./childcomps/DetailParamInfo.vue";
import DetailCommentInfo from "./childcomps/DetailCommentInfo.vue";
import DetailRecommendInfo from "./childcomps/DetailRecommendInfo.vue";

import {
  getdetali,
  Goods,
  GoodsParam,
  Shop,
  comment,
  getRecommend,
} from "../../network/detali";

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
  },
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
      getthemetopys:null,
    };
  },

  methods: {
    tmclick(index) {
      // console.log(index);
      this.$refs.scroll.scrollTo(0, -this.themetopys[index], 500);
    },

  },
  updated () {
    this.themetopys=[];
      this.themetopys.push(0);
      this.themetopys.push(this.$refs.paraminfo.$el.offsetTop);
      this.themetopys.push(this.$refs.commentinfo.$el.offsetTop);
      this.themetopys.push(this.$refs.recommendinfo.$el.offsetTop);
      console.log(this.themetopys);
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
    //  this.getthemetopys=debouce(()=>{
    //    this.themetopys=[];
    //   this.themetopys.push(0);
    //   this.themetopys.push(this.$refs.paraminfo.$el.offsetTop);
    //   this.themetopys.push(this.$refs.commentinfo.$el.offsetTop);
    //   this.themetopys.push(this.$refs.recommendinfo.$el.offsetTop);
    //   console.log(this.themetopys);
    //  })
    });
    getRecommend().then((res) => {
      this.recommendList = res.data.list;
      // console.log(this.recommendList);
      // console.log(res);
    });
    // this.$nextTick(()=>{
    //    this.themetopys=[];
    //   this.themetopys.push(0);
    //   this.themetopys.push(this.$refs.paraminfo.$el.offsetTop);
    //   this.themetopys.push(this.$refs.commentinfo.$el.offsetTop);
    //   this.themetopys.push(this.$refs.recommendinfo.$el.offsetTop);
    //   console.log(this.themetopys);
    // })
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
  height: calc(100% - 44px);
}
</style>