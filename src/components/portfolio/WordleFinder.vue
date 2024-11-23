<template>
  <PortfolioTemplate :images="images" project-name="Wordle finder">
    <template #description>
      <ul class="disc">
        <li>
          <strong>Website:</strong>
          <a
            href="https://wordle-finder.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            https://wordle-finder.com
          </a>
        </li>

        <li>
          <strong>Github repository:</strong>
          <a
            href="https://github.com/TDAK1509/wordle-finder"
            rel="noopener noreferrer"
            target="_blank"
          >
            https://github.com/TDAK1509/wordle-finder
          </a>
        </li>

        <li>
          <strong>Description:</strong>
          <span class="wordle-finder__text">
            A tool for helping playing the Wordle game.
          </span>
        </li>

        <li>
          <strong>Technologies used:</strong>
          <span class="wordle-finder__text">Native HTML, CSS, Javascript.</span>
        </li>
      </ul>
    </template>
  </PortfolioTemplate>
</template>

<script setup>
import PortfolioTemplate from "./PortfolioTemplate.vue";
import wordleFinderImage1 from "@/assets/portfolio/wordle-finder-1.png";
import wordleFinderImage2 from "@/assets/portfolio/wordle-finder-2.png";
import wordleFinderImage3 from "@/assets/portfolio/wordle-finder-3.png";

const images = [
  {
    src: wordleFinderImage1,
    isMobile: true,
  },
  {
    src: wordleFinderImage2,
    isMobile: true,
  },
  {
    src: wordleFinderImage3,
    isDesktop: true,
  },
];
</script>

<style scoped>
.wordle-finder__text {
  margin-left: 0.3em;
}
</style>
