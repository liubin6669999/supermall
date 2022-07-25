<template>
  <div class="TabBar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar"
}
</script>

<style scoped>
.TabBar{
  background: #f6f6f6;
  display: flex;
  justify-content: space-around;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow:0px -3px 1px rgba(100,100,100,.08);
}
</style>
