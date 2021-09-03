<template>
  <div class="recommend-info">
    <div class="info-header">热门推荐</div>
    <!-- <grid-view> -->
      <!-- <goods  v-for="(item, index) in recommendList" :key="index" :goodslist=" recommendList"></goods> -->
      <goods :goodslist="recommendList"></goods>
    <!-- </grid-view> -->
  </div>
</template>

<script>
// import GridView from "../../../components/common/gridview/GridView.vue";
import goods from "../../../components/content/goods/goods.vue";

export default {
  name: "DetailRecommendInfo",
  components: {
    // GridView,
    goods,
  },
  props: {
    recommendList: {
      type: Array,
    },
  },
};
</script>

<style scoped>
.recommend-info {
  padding: 5px;
}

.info-header {
  line-height: 40px;
  padding-left: 8px;
  font-size: 15px;
  color: #333;
}
</style>
