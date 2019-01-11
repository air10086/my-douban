<template>
  <div>
    <m-tabbar v-model="select">
      <m-tabbar-item id="tab1">
        <img src="../assets/index.png"
             alt=""
             slot="icon-normal">
        <img src="../assets/index_active.png"
             alt=""
             slot="icon-active">
        主页
      </m-tabbar-item>
      <m-tabbar-item id="tab2">
        <img src="../assets/movie.png"
             alt=""
             slot="icon-normal">
        <img src="../assets/movie_active.png"
             alt=""
             slot="icon-active">
        电影
      </m-tabbar-item>
      <m-tabbar-item id="tab3">
        <img src="../assets/广播.png"
             alt=""
             slot="icon-normal">
        <img src="../assets/广播_active.png"
             alt=""
             slot="icon-active">
        广播
      </m-tabbar-item>
      <m-tabbar-item id="tab4">
        <img src="../assets/小组.png"
             alt=""
             slot="icon-normal">
        <img src="../assets/小组_active.png"
             alt=""
             slot="icon-active">
        小组
      </m-tabbar-item>
      <m-tabbar-item id="tab5">
        <img src="../assets/mine.png"
             alt=""
             slot="icon-normal">
        <img src="../assets/mine_active.png"
             alt=""
             slot="icon-active">
        我的
      </m-tabbar-item>
    </m-tabbar>
  </div>
</template>

<script>
// 对组件进行注册并使用
import mTabbar from '../components/tabbar.vue'
import mTabbarItem from '../components/tabbar-item.vue'
export default {
  name: 'index',
  components: {
    mTabbar,
    mTabbarItem
  },
  data () {
    return {
      select: 'tab1'
    }
  }
}
</script>

<style scoped>
</style>
