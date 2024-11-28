<template>
  <AppPanel class="portfolio-container">
    <section class="portfolio-page">
      <Transition :name="transitionName" mode="out-in">
        <component :is="projectComponents[page]" :key="transitionKey" />
      </Transition>
    </section>

    <div class="portfolio-page__footer">
      <PreviousPageButton
        :class="{ 'page-button--hide': page === 0 }"
        @click="toPreviousPage"
      />
      <NextPageButton
        :class="{ 'page-button--hide': page === maxPages }"
        @click="toNextPage"
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

const projectComponents = [BebitUsergram, TinhLai, PviCard, WordleFinder];
const maxPages = projectComponents.length - 1;

const page = ref(0);
const transitionName = ref("");
const transitionKey = ref(0);

function toPreviousPage() {
  transitionName.value = "slide-right";
  transitionKey.value++;
  if (page.value > 0) page.value--;
}

function toNextPage() {
  transitionName.value = "slide-left";
  transitionKey.value++;
  if (page.value < maxPages) page.value++;
}
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
/* Slide to the left */
.slide-left-enter-active,
.slide-left-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.slide-left-enter {
  transform: translateX(100%);
  opacity: 0;
}
.slide-left-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

/* Slide to the right */
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.slide-right-enter {
  transform: translateX(-100%);
  opacity: 0;
}
.slide-right-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
