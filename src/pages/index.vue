<template>
  <div>
    <m-tabbar>
      <m-tabbar-item id="tab1">
        <img
          src="../assets/index.png"
          alt=""
          slot="icon-normal"
        >
        主页
      </m-tabbar-item>
      <m-tabbar-item id="tab2">
        <img
          src="../assets/movie.png"
          alt=""
          slot="icon-normal"
        >
        电影
      </m-tabbar-item>
      <m-tabbar-item id="tab3">
        <img
          src="../assets/广播.png"
          alt=""
          slot="icon-normal"
        >
        广播
      </m-tabbar-item>
      <m-tabbar-item id="tab4">
        <img
          src="../assets/小组.png"
          alt=""
          slot="icon-normal"
        >
        小组
      </m-tabbar-item>
      <m-tabbar-item id="tab5">
        <img
          src="../assets/mine.png"
          alt=""
          slot="icon-normal"
        >
        我的
      </m-tabbar-item>
    </m-tabbar>

  </div>
</template>

<script>
import mTabbar from '../components/tabbar.vue'
import mTabbarItem from '../components/tabbar-item.vue'
export default {
  components: {
    mTabbar,
    mTabbarItem
  }
}
</script>

<style scoped>
</style>
