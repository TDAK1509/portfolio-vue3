<template>
  <AppPanel class="portfolio-container">
    <section class="portfolio-page">
      <component
        v-for="(c, index) in projectComponents"
        v-show="page === index"
        :key="index"
        :is="c"
      />
    </section>

    <div class="portfolio-page__footer">
      <PreviousPageButton
        :class="{ 'page-button--hide': page === 0 }"
        @click="page--"
      />
      <NextPageButton
        :class="{ 'page-button--hide': page === maxPages }"
        @click="page++"
      />
    </div>
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
  height: 650px;
  position: relative;
  font-size: 0.9rem;
}
.portfolio-page {
  position: relative;
  height: calc(100% - 40px);
  overflow-y: auto;
}
.portfolio-page__footer {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.page-button--hide {
  visibility: hidden;
}

@media only screen and (max-width: 600px) {
  .portfolio-container {
    font-size: 0.8rem;
  }
}
</style>
