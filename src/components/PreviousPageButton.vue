<template>
  <RouterLink class="previous-page-button">
    <SvgArrowRight class="previous-page-button-icon" />
  </RouterLink>
</template>

<script setup>
import SvgArrowRight from "@/components/svgs/SvgArrowRight.vue";
</script>

<style scoped>
.previous-page-button {
  position: absolute;
  bottom: -1em;
  left: -0.5em;
  transition: all 0.2s ease;
}
.previous-page-button:hover {
  transform: scale(1.2);
  color: var(--color-black);
}
.previous-page-button-icon {
  width: 40px;
  height: 40px;
  transform: rotate(180deg);
}
</style>
