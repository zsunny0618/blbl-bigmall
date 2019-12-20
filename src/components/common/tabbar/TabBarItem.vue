<template>
  <div class="tarbar-item" @click="itemClick">
    <div v-show="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-show="isActive">
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "#c3b17b"
    }
  },
  data() {
    return {
      // isActive: false
    };
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) > -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    }
  },
  methods: {
    itemClick() {
      if(this.$route.fullPath === this.path) return
      this.$router.replace(this.path);
    }
  }
};
</script>
 
<style>
.tarbar-item {
  flex: 1;
  height: 49px;
  text-align: center;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.tarbar-item img {
  display: block;
  width: 24px;
  height: 24px;
}

</style>