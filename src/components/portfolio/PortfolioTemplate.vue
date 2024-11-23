<template>
  <div class="portfolio-item">
    <slot name="description"></slot>

    <div class="portfolio__images">
      <div v-for="(image, index) in images" :key="index" class="portfolio_item">
        <IphonePlaceholder
          v-if="image.isMobile"
          :imgSrc="image.src"
          :imgStyle="image.style"
        />
        <DesktopPlaceholder
          v-else-if="image.isDesktop"
          :imgSrc="image.src"
          :imgStyle="image.style"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import IphonePlaceholder from "./IphonePlaceholder.vue";
import DesktopPlaceholder from "./DesktopPlaceholder.vue";

defineProps({
  images: Array,
});
</script>

<style scoped>
.portfolio-item {
  height: auto;
}
.portfolio__images {
  display: flex;
  margin-top: 1em;
  height: 400px;
  overflow-x: auto;
  gap: 2em;
}
.portfolio_figure {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border: 1px solid var(--color-black);
}
.portfolio_item {
  flex: 1;
}
</style>
