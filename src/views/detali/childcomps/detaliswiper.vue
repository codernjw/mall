<template>
  <div>
      <Swiper class="detaliswiper">
          <swiper-item v-for="item,index in topimage" :key="index">
              <img :src="item" alt="">
          </swiper-item>
      </Swiper>
  </div>
</template>

<script>
import {Swiper, SwiperItem} from '../../../components/common/swiper/index';
export default {
name:'detaliswiper',
components: {
    Swiper, 
SwiperItem,
},
props: {
topimage:{
    type:Array,
    default(){
        return []
    }
}
},
}
</script>

<style>
.detaliswiper{
height: 300px;
}
</style>