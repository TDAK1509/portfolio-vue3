<template>
  <PortfolioTemplate :images="images">
    <template #description>
      <ul class="tinh-lai__description disc">
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
          <span class="tinh-lai__text"
            >A multilingual tool for calculating compound interest.</span
          >
        </li>

        <li>
          <strong>Technologies used:</strong>
          <span class="tinh-lai__text">NuxtJS, VueJS, Tailwind, Netlify.</span>
        </li>
      </ul>
    </template>
  </PortfolioTemplate>
</template>

<script setup>
import PortfolioTemplate from "./PortfolioTemplate.vue";
import formMobileImage from "@/assets/portfolio/tinh-lai-mobile.png";
import formDesktopImage from "@/assets/portfolio/tinh-lai-desktop.png";
import resultMobileImage from "@/assets/portfolio/tinh-lai-result-mobile.png";
import resultDesktopImage from "@/assets/portfolio/tinh-lai-result-desktop.png";

const images = [
  {
    src: formMobileImage,
    isMobile: true,
  },
  {
    src: formDesktopImage,
    isDesktop: true,
  },
  {
    src: resultMobileImage,
    isMobile: true,
  },
  {
    src: resultDesktopImage,
    isDesktop: true,
    style: { objectPosition: "0 -30px" },
  },
];
</script>

<style scoped>
.tinh-lai__description {
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 0.3em;
}
.tinh-lai__text {
  margin-left: 0.3em;
}
</style>
