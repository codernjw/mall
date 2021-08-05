<template>
  <div class="trol">
      <div v-for="item,index in title" :key="index" class="con"  @click="barclick(index)">
          <span :class="{active:apple==index}">{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
name:'TabControl',
props:{
    title:{
        type:Array,
    default(){
        return []
    }
    }
},
data(){
    return {
        apple:0
    }
},
methods: {
    barclick(index){
        this.apple=index;
    }
}
}
</script>

<style>
.trol{
    display: flex;
    text-align: center;
}
.con{
    flex: 1;
    height: 40px;
    line-height: 40px;
}
.con span{
    padding-bottom: 3px;
   
}
.active{
     border-bottom: 2px solid #ea68a2;
     color: #ea68a2;
}
</style>