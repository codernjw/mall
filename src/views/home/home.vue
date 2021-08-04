<template>
  <div class="home">
    <Navbar>
       <template v-slot:left>
      </template>
      <template v-slot:center>
        购物街
      </template>
       <template v-slot:right>
      </template>
    </Navbar>
  </div>
</template>

<script>
import Navbar from '../../components/common/navbar/Navbar.vue';
import {gethomemultidata} from '../../network/home'
export default {
name:'home',
components: {
  Navbar,
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
  background-color: pink;
  color: aliceblue;
}
</style>