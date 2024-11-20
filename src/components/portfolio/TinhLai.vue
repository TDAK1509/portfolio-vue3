<template>
  <div class="portfolio-item">
    <ul class="portfolio__description disc">
      <li>
        <strong>Website:</strong>
        <a
          href="https://www.tinhlai.com/en"
          rel="noopener noreferrer"
          target="_blank"
        >
          https://www.tinhlai.com/en
        </a>
      </li>

      <li>
        <strong>Github repository:</strong>
        <a
          href="https://github.com/TDAK1509/tinhlai"
          rel="noopener noreferrer"
          target="_blank"
        >
          https://github.com/TDAK1509/tinhlai
        </a>
      </li>

      <li>
        <strong>Description:</strong>
        <span class="portfolio__text"
          >A multilingual tool for calculating compound interest.</span
        >
      </li>

      <li>
        <strong>Technologies used:</strong>
        <span class="portfolio__text">NuxtJS, VueJS, Tailwind, Netlify.</span>
      </li>
    </ul>

    <div class="portfolio__images">
      <div class="portfolio_item">
        <IphonePlaceholder :imgSrc="formMobileImage" />
      </div>
      <div class="portfolio_item">
        <DesktopPlaceholder :imgSrc="formDesktopImage" />
      </div>
      <div class="portfolio_item">
        <IphonePlaceholder :imgSrc="resultMobileImage" />
      </div>
      <div class="portfolio_item">
        <DesktopPlaceholder
          :imgSrc="resultDesktopImage"
          :imgStyle="{ objectPosition: '0 -30px' }"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import IphonePlaceholder from "./IphonePlaceholder.vue";
import DesktopPlaceholder from "./DesktopPlaceholder.vue";
import formMobileImage from "@/assets/portfolio/tinh-lai-mobile.png";
import formDesktopImage from "@/assets/portfolio/tinh-lai-desktop.png";
import resultMobileImage from "@/assets/portfolio/tinh-lai-result-mobile.png";
import resultDesktopImage from "@/assets/portfolio/tinh-lai-result-desktop.png";
</script>

<style scoped>
.portfolio-item {
  height: auto;
}
.portfolio__description {
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 0.3em;
}
.portfolio__text {
  margin-left: 0.3em;
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
