<template>
  <div class="lmy">
    <detalinavbar class="detali-bar"></detalinavbar>
    <scroll class="content">
       <detaliswiper :topimage="topimage"></detaliswiper>
    <detalibaseinfo :goods="goods"></detalibaseinfo>
    <detail-shop-info :shop="shop"></detail-shop-info>
    <detail-goods-info :detail-info="detailInfo"></detail-goods-info>
    <detail-param-info :param-info='goodsparam'></detail-param-info>
    <detail-comment-info :comment-info='commentinfo'></detail-comment-info>
    <detail-recommend-info :recommend-list="recommendList"></detail-recommend-info>
    </scroll>
  </div>
</template>

<script>
import detalinavbar from "../detali/childcomps/detalinavbar.vue";
import detaliswiper from "./childcomps/detaliswiper.vue";
import detalibaseinfo from "./childcomps/detalibaseinfo.vue";
import DetailShopInfo from "./childcomps/DetailShopInfo.vue";
import scroll from '../../components/common/scroll/scroll.vue'
import DetailGoodsInfo from './childcomps/DetailGoodsInfo.vue'
import DetailParamInfo from './childcomps/DetailParamInfo.vue'
import DetailCommentInfo from './childcomps/DetailCommentInfo.vue'
import DetailRecommendInfo from './childcomps/DetailRecommendInfo.vue'

import { getdetali, Goods, GoodsParam, Shop, comment,getRecommend} from "../../network/detali";

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
      detailInfo:{},
      goodsparam:{},
      commentinfo:{},
      recommendList: [],
    };
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
      this.detailInfo=data.detailInfo;
      this.goodsparam=new GoodsParam(data.itemParams.info,data.itemParams.rule);
      this.commentinfo=new comment(data.rate.list);
    });
    getRecommend().then((res, error) => {
          if (error) return
          this.recommendList = res.data.list
          console.log(this.recommendList);
        })
  },
};
</script>

<style>
.lmy{
   height: 100vh;
}
.detali-bar{
   position: relative;
   z-index: 9;
   background-color: #fff;
}
.content{
height: calc(100% - 44px);
}
</style>