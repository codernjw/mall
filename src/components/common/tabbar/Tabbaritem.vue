<template>
       <div class="tab-bar-item" @click="itemclick">
           <div v-if='!isactive'>
               <slot name="item-icon"></slot> 
           </div>
          <div v-else>
              <slot name="item-icon-active"></slot>
          </div>
          <div :style="activecolor">
          <slot  name="item-text"></slot>
          </div>
       </div>
</template>

<script>
export default {
name:'Tababritem',
props: {
    path: String,
    isactivecolor:{
     type: String,
     default:'pink'
    },
},
data(){
return{
    
}
},
computed: {
  isactive(){
      return this.$route.path==this.path;
  },
  activecolor(){
      return this.isactive ? {color:this.isactivecolor}:{}
  }  
},
methods: {
    itemclick(){
 this.$router.replace(this.path)
    }
}
}
</script>

<style>
@import '../../../assets/css/tab-bar.css';
</style>