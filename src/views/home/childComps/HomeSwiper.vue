<template>
  <div class>
    <swiper ref="swiper" v-if="banners.length">
      <swiper-item v-for="(banner, index) in banners" :key="index">
        <a :href="banner.link">
          <img :src="banner.image" alt />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>
 
<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: "HomeSwiper",
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    banners: {
      type: Array,
      default: []
    }
  },
  data() {
    return {};
  },
  methods: {
    // stopTimer() {
    //   this.$refs.swiper.stopTimer();
    // },
    // startTimer() {
    //   if (this.$refs.swiper) {
    //     this.$refs.swiper.startTimer();
    //   }
    // }
  }
};
</script>
 
<style scoped>
</style>