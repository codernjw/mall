<template>
  <div class="goods" @click="itemclick">
      <img :src="getImg" alt="">
      <div class="goods-item">
              <p>{{goodslistitem.title}}</p>
          <span class="price">{{goodslistitem.price}}</span>
          <span class="cfav">{{goodslistitem.cfav}}</span>
      </div>
  </div>
</template>

<script>
export default {
name:'goodsitem',
props: {
    goodslistitem:{
        type:Object,
        defalut(){
            return {}
        }
    }
},
computed: {
      getImg() {
        return  this.goodslistitem.image || this.goodslistitem.show.img
      }
    },
methods: {
    itemclick(){
        // console.log('dianji');
        this.$router.push('/detali/'+this.goodslistitem.iid)
    }
}
}
</script>

<style>
.goods{
    position: relative;
    width: 48%;
}
.goods img{
    width: 100%;
    margin-bottom: 40px;
    border-radius: 10px;
}
.goods-item{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 10px;
    font-size: 12px;
}
.goods-item p{
     width: 100%;
     white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-left: 2px;
}
.goods-item .price{
    color: pink;
    margin-left: 30px;
    margin-right: 24px;
}
.cfav{
    position: relative;
}
.cfav::before{
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("../../../assets/image/common/collect.svg") 0 0/14px 14px;
}
</style>