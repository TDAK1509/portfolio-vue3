<template>
  <figure class="iphone-placeholder">
    <img class="iphone-placeholder__img" :src="imgSrc" :style="imgStyle" />
  </figure>
</template>

<script setup>
defineProps({
  imgSrc: String,
  imgStyle: Object,
});
</script>

<style scoped>
.iphone-placeholder {
  --height: 380px;
  --width: calc(var(--height) * 0.5);
  width: var(--width);
  height: var(--height);
  background-image: url("@/assets/portfolio/phone.png");
  background-repeat: no-repeat;
  background-size: calc(var(--width) + 20px) calc(var(--height) + 32px);
  background-position: -10px -8px;
  overflow: hidden;
  display: block;
  padding: 34px 13px;
}
.iphone-placeholder__img {
  --img-width: calc(var(--width) - 23px);
  --img-height: calc(var(--height) - 70px);
  width: var(--img-width);
  height: var(--img-height);
  object-fit: cover;
  object-position: 0 -25px;
  border: 1px solid #fff;
}
</style>
