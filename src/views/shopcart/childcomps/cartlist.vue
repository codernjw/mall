<template>
  <div class="cart">
      <!-- <li v-for="item,index in cartlist" :key="index">{{item}}</li> -->
      <scroll class="conent" ref="scroll">
        <cartlistitem v-for="item,index in cartlist" :key="index" :payload='item'></cartlistitem>
      </scroll>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import scroll from '../../../components/common/scroll/scroll.vue'
import cartlistitem from './cartlistitem.vue'
export default {
name:'cartlist',
components:{
    scroll,
    cartlistitem,
},
computed: {
    ...mapGetters(['cartlist'])
},
activated(){
    this.$refs.scroll.scroll.refresh()
}
}
</script>

<style scoped>
/* .cart{
    height: 50vh;
} */
.conent{
    height: calc(100vh - 44px - 49px - 40px);
    overflow: hidden;
    /* background-color: royalblue; */
}
</style>
