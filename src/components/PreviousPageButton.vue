<template>
  <button class="previous-page-button">
    <SvgArrowRight class="previous-page-button-icon" />
  </button>
</template>

<script setup>
import SvgArrowRight from "@/components/svgs/SvgArrowRight.vue";
</script>

<style scoped>
.previous-page-button {
  transition: all 0.2s ease;
  background: none;
  border: none;
}
.previous-page-button-icon {
  width: 40px;
  height: 40px;
  transform: rotate(180deg);
}
</style>
