<template>
  <div>
    <!-- <keep-alive>
      <router-view></router-view>
    </keep-alive> -->
    <router-view v-slot="{ Component }">
      <keep-alive exclude="detali">
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <maintabbaritem v-if="$route.meta.footShow"></maintabbaritem>
  </div>
</template>

<script>
import maintabbaritem from "./components/content/maintabbar/maintabbar.vue";

export default {
  name: "APP",
  components: { maintabbaritem },
};
</script>


<style>
@import "assets/css/base.css";
@import "assets/css/normalize.css";
</style>

