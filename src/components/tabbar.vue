<template>
  <div class="m-tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['value']
}
</script>

<style scoped lang="less" >
.m-tabbar {
  display: flex;
  flex-flow: row nowrap;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background: #fff;
  overflow: hidden;
  border-top: 1px solid #e4e4e4;
}
</style>
