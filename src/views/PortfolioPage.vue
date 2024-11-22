<template>
  <AppPanel class="portfolio-container">
    <PreviousPageButton
      class="portfolio-page__page-button portfolio-page__page-button--previous"
      :disabled="page === 0"
      @click="page--"
    />
    <NextPageButton
      class="portfolio-page__page-button portfolio-page__page-button--next"
      :disabled="page === 1"
      @click="page++"
    />

    <section class="portfolio-page">
      <TinhLai v-show="page === 0" />
      <div v-show="page === 1">another page</div>
    </section>
  </AppPanel>
</template>

<script setup>
import AppPanel from "@/components/AppPanel.vue";
import TinhLai from "@/components/portfolio/TinhLai.vue";
import PreviousPageButton from "@/components/PreviousPageButton.vue";
import NextPageButton from "@/components/NextPageButton.vue";
import { ref } from "vue";

const page = ref(0);
</script>

<style scoped>
.portfolio-container {
  margin-bottom: 2em;
  height: 650px;
  position: relative;
}
.portfolio-page {
  position: relative;
  height: 100%;
}
.portfolio-page__page-button {
  position: absolute;
  bottom: 0;
}
.portfolio-page__page-button--previous {
  left: 1em;
}
.portfolio-page__page-button--next {
  right: 1em;
}
</style>
