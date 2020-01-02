<template>
  <transition name="fade">
    <div class="toast" v-if="isShow">
      <div>{{ msg }}</div>
    </div>
  </transition>
</template>
 
<script>
export default {
  name: "vueName",
  data() {
    return {
      msg: "",
      isShow: false
    };
  },
  methods: {
    show(msg = "默认提示", duration = 2000) {
      this.msg = msg;
      this.isShow = true;
      setTimeout(() => {
        (this.isShow = false), (this.msg = "");
      }, duration);
    }
  }
};
</script>
 
<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 10px 20px;
  z-index: 999;

  color: #fff;
  background: rgba(0, 0, 0, 0.7);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>