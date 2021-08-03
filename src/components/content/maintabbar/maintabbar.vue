<template>
  <tabbar>
  <Tabbaritem path='/home' isactivecolor="skyblue">
    <template v-slot:item-icon>
       <img src="../../../assets/image/tabbar/home.svg" alt="">
    </template>
    <template v-slot:item-icon-active>
       <img src="../../../assets/image/tabbar/home_active.svg" alt="">
    </template>
    <template v-slot:item-text>
      <div>首页</div>
    </template>
  </Tabbaritem>
 <Tabbaritem path='/category' isactivecolor="blueviolet">
     <template v-slot:item-icon>
       <img src="../../../assets/image/tabbar/category.svg" alt="">
    </template>
    <template v-slot:item-icon-active>
       <img src="../../../assets/image/tabbar/category_active.svg" alt="">
    </template>
    <template v-slot:item-text>
      <div>分类</div>
    </template>
  </Tabbaritem>
  <Tabbaritem path='/shopcart' isactivecolor="darkorange">
     <template v-slot:item-icon>
       <img src="../../../assets/image/tabbar/shopcart.svg" alt="">
    </template>
    <template v-slot:item-icon-active>
       <img src="../../../assets/image/tabbar/shopcart_active.svg" alt="">
    </template>
    <template v-slot:item-text>
      <div>购物车</div>
    </template>
  </Tabbaritem>
  <Tabbaritem path='/porfile' isactivecolor="pink">
     <template v-slot:item-icon>
       <img src="../../../assets/image/tabbar/profile.svg" alt="">
    </template>
    <template v-slot:item-icon-active>
       <img src="../../../assets/image/tabbar/profile_active.svg" alt="">
    </template>
    <template v-slot:item-text>
      <div>我的</div>
    </template>
  </Tabbaritem>
</tabbar>
</template>

<script>
import Tabbar from '../../common/tabbar/Tabbar.vue'
import Tabbaritem from '../../common/tabbar/Tabbaritem.vue'
export default {
name:'maintabbaritem',
components: {
  Tabbar,
  Tabbaritem,
}
}
</script>

<style>

</style>