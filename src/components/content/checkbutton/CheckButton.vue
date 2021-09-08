<template>
  <div class="button" :class="{child:ischeck}" @click="button">
      <img src="../../../assets/image/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
name:'CheckButton',
props: {
    ischeck:{
        type:Boolean,
        default:false,
    }
},
methods: {
    button(){
        this.$emit('checkclick')
    }
}
}
</script>

<style scopde>
.button{
    border-radius: 50%;
    border: 2px solid #aaa;
}
.child{
    background-color: pink;
    border-color: pink;
}
</style>