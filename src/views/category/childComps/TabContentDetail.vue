<template>
  <grid-view>
    <!-- <goods v-for="(item, index) in categoryDetail" :key="index" :goods="item"></goods> -->
     <!-- <goods :goodslist="categoryDetail"></goods> -->
     <goods-list-item v-for="(item, index) in categoryDetail" :key="index" :goods="item"></goods-list-item>
  </grid-view>
</template>

<script>
  import GridView from '../../../components/common/gridview/GridView.vue'
  // import goods from '../../../components/content/goods/goods.vue'
  import GoodsListItem from '../../home/childcomps/GoodsListltem.vue'

  export default {
    name: "TabContentDetail",
    components: {
      GridView,
       GoodsListItem,
      // goods
    },
    props: {
      categoryDetail: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>

</style>

