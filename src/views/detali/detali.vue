<template>
  <div>
     <detalinavbar></detalinavbar>
     <detaliswiper :topimage="topimage"></detaliswiper>
     <detalibaseinfo :goods="goods"></detalibaseinfo>
  </div>
</template>

<script>
import detalinavbar from '../detali/childcomps/detalinavbar.vue'
import detaliswiper from './childcomps/detaliswiper.vue'
import detalibaseinfo from './childcomps/detalibaseinfo.vue'

import {getdetali,Goods} from '../../network/detali'

export default {
name:'detali',
components: {
   detalinavbar,
   detaliswiper,
   detalibaseinfo,
},
data(){
    return {
        iid:null,
        topimage:[],
        goods:{},
    }
},
created () {
    this.iid=this.$route.params.iid;
    getdetali(this.iid).then(res=>{
        const data=res.result;
       this.topimage=data.itemInfo.topImages;
       console.log(res);
       this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services);
       console.log(this.goods);
    })
},
}
</script>

<style>

</style>