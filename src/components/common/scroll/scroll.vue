<template>
  <div class="warpper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
// batter-scroll中包含组件需要引入observe-dom插件。并使用
import ObserveDom from "@better-scroll/observe-dom";
import Pullup from "@better-scroll/pull-up";
BScroll.use(Pullup);
BScroll.use(ObserveDom);
export default {
  name: "scroll",
  props: {
    position: {
      type: Number,
      default: 0,
    },
    pullupload: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    this.scroll = new BScroll(".warpper", {
      // observe-dom插件的声明
      observeDOM: true,
      click: true,
      probeType: this.position,
      pullUpLoad: this.pullupload,
      //  tap:true,
    });
    this.scroll.on("scroll", (position) => {
      // console.log(position);
      this.$emit("scroll", position);
    });
    this.scroll.on("pullingUp", () => {
      this.$emit('upload')
      // 执行一次上拉加载更多命令后，关闭上拉加载更多，然后又重新调用。
      // setTimeout(() => {
      //   this.scroll.finishPullUp();
      // }, 2000);
    });
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll.scrollTo(x, y, time);
    },
    finishpullup(){
      this.scroll.finishPullUp();
    }
  },
};
</script>

<style>
</style>