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
BScroll.use(ObserveDom);
export default {
  name: "scroll",
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    this.scroll = new BScroll(".warpper", {
      //   probeType: 3,
      //   pullUpLoad: true,
      // observe-dom插件的声明
      observeDOM: true,
      click: true,
      //  tap:true,
    });
    // this.scroll.on("scroll", (position) => {
    //   // console.log(position);
    // });
    // this.scroll.on("pullingUp", () => {
    //   console.log("上拉加载更多");
    //   // 执行一次上拉加载更多命令后，关闭上拉加载更多，然后又重新调用。
    //   setTimeout(()=>{
    //     this.scroll.finishPullUp();
    //   },2000)
    // });
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll.scrollTo(x, y, time);
    },
  },
};
</script>

<style>
</style>