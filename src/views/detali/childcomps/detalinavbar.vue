<template>
  <navbar>
    <template v-slot:left>
      <div class="back" @click="backclick">
        <img src="../../../assets/image/common/back.svg" alt="" />
      </div>
    </template>
    <template v-slot:center>
      <div class="detali">
        <div
          v-for="(item, index) in title"
          :key="index"
          class="detaliitem"
          :class="{ actived: index === currentindex }"
          @click="detaliclick(index)"
        >
          {{ item }}
        </div>
      </div>
    </template>
    <template v-slot:right> </template>
  </navbar>
</template>

<script>
import Navbar from "../../../components/common/navbar/Navbar.vue";



export default {
  name: "detalinavbar",
  components: {
    Navbar,
  },
  data() {
    return {
      title: ["商品", "参数", "详情", "推荐"],
      currentindex: 0,
    };
  },
  methods: {
    detaliclick(index) {
      this.currentindex = index;
    },
    backclick() {
      this.$router.back();
    },
  },
};
</script>

<style>
.detali {
  display: flex;
}
.detaliitem {
  flex: 1;
  font-size: 14px;
}
.actived {
  color: pink;
}
.back img {
  margin-top: 10px;
}
</style>