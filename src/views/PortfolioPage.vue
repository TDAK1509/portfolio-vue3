<template>
  <AppPanel class="portfolio-container">
    <section class="portfolio-page">
      <TinhLai />
    </section>
  </AppPanel>
</template>

<script setup>
import AppPanel from "@/components/AppPanel.vue";
import TinhLai from "@/components/portfolio/TinhLai.vue";
</script>

<style scoped>
.portfolio-container {
  margin-bottom: 2em;
  height: auto;
}
.portfolio-page {
  position: relative;
}
</style>
