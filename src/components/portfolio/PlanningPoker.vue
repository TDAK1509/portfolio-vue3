<template>
  <PortfolioTemplate :images="images" project-name="Planning poker">
    <template #description>
      <ul class="disc">
        <li>
          <strong>Project type:</strong>
          <span class="planning-poker__text">Personal project.</span>
        </li>

        <li>
          <strong>Github repository:</strong>
          <a
            href="https://github.com/TDAK1509/planning-poker"
            rel="noopener noreferrer"
            target="_blank"
          >
            https://github.com/TDAK1509/planning-poker
          </a>
        </li>

        <li>
          <strong>Description:</strong>
          <span class="planning-poker__text">
            Because planning poker sites require subscription to use
            unlimitedly, so I create this to use between my team.
          </span>
        </li>

        <li>
          <strong>Technologies used:</strong>
          <span class="planning-poker__text"
            >Native HTML, CSS, Javascript, ExpressJ, Socket.io, Heroku.</span
          >
        </li>
      </ul>
    </template>
  </PortfolioTemplate>
</template>

<script setup>
import PortfolioTemplate from "./PortfolioTemplate.vue";
import planningPokerImage from "@/assets/portfolio/planning-poker.gif";

const images = [
  {
    src: planningPokerImage,
    isDesktop: true,
    style: { objectPosition: "12px -46px" },
  },
];
</script>

<style scoped>
.planning-poker__text {
  margin-left: 0.3em;
}
</style>
