<template>
  <div class="recommend">
      <div v-for="item,index in recommend" :key="index" class="tu">
          <a :href="item.link">
              <img :src="item.image" alt="">
              <div>{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
name:'Recommend',
props: {
    recommend:{
        type:Array,
        default(){
            return []
        }
    }
}
}
</script>

<style>
.recommend{
display: flex;
}
.tu{
    flex: 1;
    text-align: center;
    font-size: 13px;
    padding: 10px 0 20px;
    border-bottom: 10px solid #eee;
}
.tu img{
    height: 70px;
    margin-bottom: 5px;
}
</style>