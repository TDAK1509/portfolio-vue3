<template>
  <div class="portfolio-item">
    <h4 class="portfolio-item__title">
      Project name:
      <span class="portfolio-item__project-name">{{ projectName }}</span>
    </h4>
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
  projectName: String,
  images: Array,
});
</script>

<style scoped>
.portfolio-item__project-name {
  text-align: left;
  letter-spacing: 1px;
  color: var(--color-orange);
}
.portfolio-item {
  height: auto;
  text-align: left;
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

@media only screen and (max-width: 600px) {
  .portfolio-item__title {
    font-size: 1rem;
    margin-bottom: 0.1em;
  }
}
</style>
