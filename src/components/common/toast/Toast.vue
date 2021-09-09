<template>
  <div  >
      <div class="toast" v-show="isshow">{{message}}</div>
  </div>
</template>

<script>
export default {
name:'Toast',
props: {
message:{
    type:String,
    default:''
},
isshow:{
    type:Boolean,
    default:false
}
},
}
</script>

<style scoped>
.toast{
position: fixed;
top: 50%;
left: 50%;
padding: 8px 10px;
transform: translate(-50%, -50%);
background-color: rgba(0, 0, 0, .7);
color: #fff;
}
</style>