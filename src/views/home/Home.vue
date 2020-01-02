<template>
  <div class="home">
    <nav-bar class="nav-bar">
      <template #center>购物街</template>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <div v-show="checked.isShow">HHHHHHHH</div>
    <button @click="change">+++</button>
    <h2>{{ age }}</h2>
    <div class="flex">
      <div>111</div>
      <div class="right">222</div>
    </div>
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
  },
  computed: {
    checked() {
      return this.$store.getters.checked;
    },
    // age(){
    //   return this.$store.getters.age
    // }
    age: {
      get(){
        return this.$store.getters.age
      },
      set(val) {
        this.$store.state.age = val
      }
    }
  },
  methods: {
    change() {
      this.$toast.show('哈哈哈', 1500)
      // this.checked.isShow = !this.checked.isShow

      // console.log(this.$store.state.checked.isShow);
      // console.log(this.$store.getters.checked.isShow);

      // this.age += 1;
      // console.log(this.$store.state.age);
      // console.log(this.$store.getters.age);
    }
  }
};
</script>
 
<style scoped>
.nav-bar {
  background: pink;
  color: #fff;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
}

.flex {
  display: flex;
}

.right {
  margin-left: auto;
}
</style>