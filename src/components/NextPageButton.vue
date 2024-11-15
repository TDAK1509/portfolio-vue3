<template>
  <RouterLink class="next-page-button">
    <SvgArrowRight class="next-page-button-icon" />
  </RouterLink>
</template>

<script setup>
import SvgArrowRight from "@/components/svgs/SvgArrowRight.vue";
</script>

<style scoped>
.next-page-button {
  position: absolute;
  bottom: -1em;
  right: -0.5em;
  transition: all 0.2s ease;
}
.next-page-button:hover {
  transform: scale(1.2);
  color: var(--color-black);
}
.next-page-button-icon {
  width: 40px;
  height: 40px;
  display: inline-block;
}
</style>
