<template>
  <div>
    <div class="recommend-bar">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendBar"
}
</script>

<style scoped>
  .recommend-bar{
    display: flex;
    justify-content:center;
  }
</style>
