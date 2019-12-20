<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "NavBar",
  data() {
    return {};
  }
};
</script>
 
<style scoped>
.nav-bar {
  height: 48px;
  line-height: 48px;
  display: flex;
  text-align: center;
}

.left,
.right {
  width: 60px;
}

.center {
  flex: 1;
}
</style>