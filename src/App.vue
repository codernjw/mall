<template>
  <div>
    <!-- <keep-alive>
      <router-view></router-view>
    </keep-alive> -->
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <maintabbaritem></maintabbaritem>
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

