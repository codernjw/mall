<template>
 <div class='goodss'>
      <goodsitem v-for="item,index in goodslist" :key="index" :goodslistitem="item">
      </goodsitem>
 </div>
</template>

<script>
import goodsitem from './goodsitem.vue'
export default {
name:'goods',
props: {
goodslist:{
    type:Array,
    default(){
        return []
    }
}
},
components: {
    goodsitem,
}
}
</script>

<style>
.goodss{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
</style>