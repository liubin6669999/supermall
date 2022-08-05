<template>
    <div class="swiper-slide">
      <slot></slot>
    </div>
</template>

<script>
import 'swiper/swiper-bundle.min.css'
export default {
  name: "SwiperItem"
}
</script>

<style scoped>
.swiper-slide{
  text-align: center;
}
.swiper-slide img{
  width: 100%;
}
</style>
