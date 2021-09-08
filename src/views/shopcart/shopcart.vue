<template>
  <div>
    <Navbar class="lili">
      <template v-slot:left> </template>
      <template v-slot:center> 购物车 ({{ length }}) </template>
      <template v-slot:right> </template>
    </Navbar>
    <cartlist></cartlist>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
import Navbar from "../../components/common/navbar/Navbar.vue";
import BottomBar from './childcomps/bottombar.vue'
import cartlist from "./childcomps/cartlist.vue";
import { mapGetters } from "vuex";
export default {
  name: "shopcart",
  components: {
    Navbar,
    cartlist,
    BottomBar,
  },
  computed: {
    // getlength() {
    //   return this.$store.getters.cartlength;
    // },
    ...mapGetters({
      length: "cartlength",
    }),
  },
};
</script>

<style scoped>
.lili {
  background-color: #ea68a2;
  color: #fff;
}
</style>