<template>
  <div class="home">
    <nav-bar class="nav-bar">
      <template #center>购物街</template>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
  </div>
</template>
 
<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper";

import { getHomeMultiData } from "network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper
  },
  data() {
    return {
      banners: [],
      recommend: []
    };
  },
  created() {
    getHomeMultiData().then(res => {
      this.banners = res.data.banner.list;
      this.recommend = res.data.recommend.list;
    });
  }
};
</script>
 
<style scoped>
.nav-bar {
  background: pink;
  color: #fff;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
}
</style>