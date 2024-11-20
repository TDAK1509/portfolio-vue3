<template>
  <figure class="desktop-placeholder">
    <img class="desktop-placeholder__img" :src="imgSrc" :style="imgStyle" />
  </figure>
</template>

<script setup>
defineProps({
  imgSrc: String,
  imgStyle: Object,
});
</script>

<style scoped>
.desktop-placeholder {
  --height: 380px;
  --width: calc(var(--height) * 1.5);
  width: var(--width);
  height: var(--height);
  background-image: url("@/assets/portfolio/desktop.png");
  background-repeat: no-repeat;
  background-size: calc(var(--width) + 119px) calc(var(--height) + 170px);
  background-position: -75px 0px;
  text-align: left;
  padding: 27px 19px;
  display: block;
}
.desktop-placeholder__img {
  --img-width: calc(var(--width) - 68px);
  --img-height: calc(var(--height) - 49px);
  width: var(--img-width);
  height: var(--img-height);
  object-fit: cover;
  object-position: 0 0;
  border: 1px solid #fff;
}
</style>
