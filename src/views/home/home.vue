<template>
<div class="headone">
  <div class="home">
    <Navbar >
       <template v-slot:left>
      </template>
      <template v-slot:center>
        购物街
      </template>
       <template v-slot:right>
      </template>
    </Navbar>
  </div>
    <home-swiper :banner="banner" class="head"></home-swiper>
   <recommend :recommend="recommend"></recommend>
   <fature-view></fature-view>
   <tab-control :title="['流行','新款','精选']" class="tab-control"></tab-control>
  </div>
</template>

<script>
import Navbar from '../../components/common/navbar/Navbar.vue';
import TabControl from '../../components/content/tabcontrol/TabControl.vue'

import HomeSwiper from './childcomps/HomeSwiper.vue';
import Recommend from './childcomps/Recommend.vue';
import FatureView from './childcomps/fatureview.vue'

import {gethomemultidata} from '../../network/home';
export default {
name:'home',
components: {
  Navbar,
  TabControl,

  HomeSwiper,
  Recommend,
  FatureView,
  
},
data(){
  return{
    banner:[],
    recommend:[]
  }
},
created () {
  gethomemultidata().then(res=>{
this.banner=res.data.banner.list;
this.recommend=res.data.recommend.list;
console.log(res.data.banner.list);
console.log(res.data.recommend.list);
  })
}
}
</script>

<style>
.home{
  background-color: #ea68a2;
  color: aliceblue;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 999;
}
.headone{
  height: 4000px;
}
.head{
  margin-top: 44px;
}
.tab-control{
  position: sticky;
  top: 44px;
  background-color: #fff;
}
</style>