<template>
  <div class>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="pink">
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/tab_icon_index.png" alt />
        </template>
        <template v-slot:item-icon-active>
          <img src="~assets/img/tabbar/tab_icon_index_sel.png" alt />
        </template>
        <template v-slot:item-text>
          <div>首页</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/tab_icon_guestRoom.png" alt />
        </template>
        <template v-slot:item-icon-active>
          <img src="~assets/img/tabbar/tab_icon_guestRoom_sel.png" alt />
        </template>
        <template v-slot:item-text>
          <div>分类</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/tab_icon_exhibition.png" alt />
        </template>
        <template v-slot:item-icon-active>
          <img src="~assets/img/tabbar/tab_icon_exhibition_sel.png" alt />
        </template>
        <template v-slot:item-text>
          <div>购物车</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/tab_icon_mine.png" alt />
        </template>
        <template v-slot:item-icon-active>
          <img src="~assets/img/tabbar/tab_icon_mine_sel.png" alt />
        </template>
        <template v-slot:item-text>
          <div>我的</div>
        </template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>
 
<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
  name: "vueName",
  components: {
    TabBar,
    TabBarItem
  },
  data() {
    return {};
  }
};
</script>
 
<style scoped>
</style>