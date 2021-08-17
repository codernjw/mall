<template>
  <div class="headone">
    <div class="home">
      <Navbar>
        <template v-slot:left> </template>
        <template v-slot:center> 购物街 </template>
        <template v-slot:right> </template>
      </Navbar>
    </div>
    <scroll class="gun" ref="scroll">
      <home-swiper :banner="banner" class="head"></home-swiper>
      <recommend :recommend="recommend"></recommend>
      <fature-view></fature-view>
      <tab-control
        :title="['流行', '新款', '精选']"
        class="tab-control"
        @tabclick="tabclick"
      ></tab-control>
      <goods :goodslist="showgoods"></goods>
    </scroll>
    <back-top @click="backclick"></back-top>
    <!-- <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
      <li>11</li>
      <li>12</li>
      <li>13</li>
      <li>14</li>
      <li>15</li>
      <li>16</li>
      <li>17</li>
      <li>18</li>
      <li>19</li>
      <li>20</li>
      <li>21</li>
      <li>22</li>
      <li>23</li>
      <li>24</li>
      <li>25</li>
      <li>26</li>
      <li>27</li>
      <li>28</li>
      <li>29</li>
      <li>30</li>
      <li>31</li>
      <li>32</li>
      <li>33</li>
      <li>34</li>
      <li>35</li>
      <li>36</li>
      <li>37</li>
      <li>38</li>
      <li>39</li>
      <li>40</li>
      <li>41</li>
      <li>42</li>
      <li>43</li>
      <li>44</li>
      <li>45</li>
      <li>46</li>
      <li>47</li>
      <li>48</li>
      <li>49</li>
      <li>50</li>
      <li>51</li>
      <li>52</li>
      <li>53</li>
      <li>54</li>
      <li>55</li>
      <li>56</li>
      <li>57</li>
      <li>58</li>
      <li>59</li>
      <li>60</li>
      <li>61</li>
      <li>62</li>
      <li>63</li>
      <li>64</li>
      <li>65</li>
      <li>66</li>
      <li>67</li>
      <li>68</li>
      <li>69</li>
      <li>70</li>
      <li>71</li>
      <li>72</li>
      <li>73</li>
      <li>74</li>
      <li>75</li>
      <li>76</li>
      <li>77</li>
      <li>78</li>
      <li>79</li>
      <li>80</li>
      <li>81</li>
      <li>82</li>
      <li>83</li>
      <li>84</li>
      <li>85</li>
      <li>86</li>
      <li>87</li>
      <li>88</li>
      <li>89</li>
      <li>90</li>
      <li>91</li>
      <li>92</li>
      <li>93</li>
      <li>94</li>
      <li>95</li>
      <li>96</li>
      <li>97</li>
      <li>98</li>
      <li>99</li>
      <li>100</li>
    </ul> -->
  </div>
</template>

<script>
import Navbar from "../../components/common/navbar/Navbar.vue";
import TabControl from "../../components/content/tabcontrol/TabControl.vue";
import goods from "../../components/content/goods/goods.vue";
import scroll from "../../components/common/scroll/scroll.vue";
import BackTop from "../../components/content/backtop/BackTop.vue";

import HomeSwiper from "./childcomps/HomeSwiper.vue";
import Recommend from "./childcomps/Recommend.vue";
import FatureView from "./childcomps/fatureview.vue";

import { gethomemultidata, gethomegoods } from "../../network/home";
export default {
  name: "home",
  components: {
    Navbar,
    TabControl,
    goods,
    scroll,
    BackTop,

    HomeSwiper,
    Recommend,
    FatureView,
  },
  data() {
    return {
      banner: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currtype: "pop",
    };
  },
  created() {
    this.gethomemultidata();
    this.gethomegoods("pop");
    this.gethomegoods("new");
    this.gethomegoods("sell");
  },
  computed: {
    showgoods() {
      return this.goods[this.currtype].list;
    },
  },
  methods: {
    tabclick(index) {
      this.currtype = index < 1 ? "pop" : index == 1 ? "new" : "sell";
    },
    gethomemultidata() {
      gethomemultidata().then((res) => {
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    },
    gethomegoods(type) {
      const page = this.goods[type].page + 1;
      gethomegoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    },
    backclick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
  },
};
</script>

<style>
.home {
  background-color: #ea68a2;
  color: aliceblue;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 999;
}
.headone {
  height: 100vh;
  position: relative;
}
.head {
  margin-top: 44px;
}
.tab-control {
  position: sticky;
  top: 44px;
  background-color: #fff;
}
.gun {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>