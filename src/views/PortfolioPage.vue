<template>
  <AppPanel class="portfolio-container">
    <PreviousPageButton
      class="portfolio-page__page-button portfolio-page__page-button--previous"
      v-show="page > 0"
      @click="page--"
    />
    <NextPageButton
      class="portfolio-page__page-button portfolio-page__page-button--next"
      v-show="page < maxPages"
      @click="page++"
    />

    <section class="portfolio-page">
      <component
        v-for="(c, index) in projectComponents"
        v-show="page === index"
        :key="index"
        :is="c"
      />
    </section>
  </AppPanel>
</template>

<script setup>
import AppPanel from "@/components/AppPanel.vue";
import TinhLai from "@/components/portfolio/TinhLai.vue";
import BebitUsergram from "@/components/portfolio/BebitUsergram.vue";
import PviCard from "@/components/portfolio/PviCard.vue";
import WordleFinder from "@/components/portfolio/WordleFinder.vue";
import PreviousPageButton from "@/components/PreviousPageButton.vue";
import NextPageButton from "@/components/NextPageButton.vue";
import { ref } from "vue";

const projectComponents = [TinhLai, BebitUsergram, PviCard, WordleFinder];
const maxPages = projectComponents.length - 1;

const page = ref(0);
</script>

<style scoped>
.portfolio-container {
  margin-bottom: 2em;
  height: auto;
  position: relative;
  font-size: 0.9rem;
  padding-bottom: 2.8em;
}
.portfolio-page {
  position: relative;
  height: 100%;
}
.portfolio-page__page-button {
  position: absolute;
  bottom: 0;
  color: var(--color-black);
}
.portfolio-page__page-button--previous {
  left: 1em;
}
.portfolio-page__page-button--next {
  right: 1em;
}
@media only screen and (min-width: 601px) {
  .portfolio-page__page-button:not(:disabled):hover {
    transform: scale(1.2);
  }
}

@media only screen and (max-width: 600px) {
  .portfolio-container {
    font-size: 0.8rem;
  }

  .portfolio-page__page-button--previous {
    left: 0.5em;
  }
  .portfolio-page__page-button--next {
    right: 0.5em;
  }
}
</style>
