<template>
  <div>
     <detalinavbar></detalinavbar>
     <detaliswiper :topimage="topimage"></detaliswiper>
  </div>
</template>

<script>
import detalinavbar from '../detali/childcomps/detalinavbar.vue'
import detaliswiper from './childcomps/detaliswiper.vue'

import {getdetali} from '../../network/detali'

export default {
name:'detali',
components: {
   detalinavbar,
   detaliswiper,
},
data(){
    return {
        iid:null,
        topimage:[],
    }
},
created () {
    this.iid=this.$route.params.iid;
    getdetali(this.iid).then(res=>{
       this.topimage=res.result.itemInfo.topImages;
    //    console.log(this.topimage);
    })
},
}
</script>

<style>

</style>