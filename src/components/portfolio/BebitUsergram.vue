<template>
  <PortfolioTemplate :images="images" project-name="Usergram">
    <template #description>
      <ul class="disc">
        <li>
          <strong>Website:</strong>
          <a
            href="https://app.usergram.info/"
            rel="noopener noreferrer"
            target="_blank"
          >
            https://app.usergram.info/
          </a>
        </li>
        <li>
          <strong>Company:</strong>
          <a
            href="https://www.bebit.co.jp/english/"
            rel="noopener noreferrer"
            target="_blank"
          >
            https://www.bebit.co.jp/english/
          </a>
        </li>
        <li>
          <strong>Description:</strong>
          <span class="usergram__text">
            A tool to improve UX by analyzing users' behaviors.
          </span>
        </li>

        <li>
          <strong>Technologies I worked with:</strong>
          <span class="usergram__text"
            >Vue, Django, Cypress, Jest, Docker, AWS, Terraform, Sentry, Github
            Actions, Micro Frontends, Micro Services.</span
          >
        </li>
      </ul>
    </template>
  </PortfolioTemplate>
</template>

<script setup>
import PortfolioTemplate from "./PortfolioTemplate.vue";
import usergramImage1 from "@/assets/portfolio/usergram-1.png";
import usergramImage2 from "@/assets/portfolio/usergram-2.png";
import usergramImage3 from "@/assets/portfolio/usergram-3.png";
import usergramImage4 from "@/assets/portfolio/usergram-4.png";
import usergramImage5 from "@/assets/portfolio/usergram-5.png";

const images = [
  {
    src: usergramImage1,
    isDesktop: true,
  },
  {
    src: usergramImage2,
    isDesktop: true,
  },
  {
    src: usergramImage3,
    isDesktop: true,
  },
  {
    src: usergramImage4,
    isDesktop: true,
  },
  {
    src: usergramImage5,
    isDesktop: true,
  },
];
</script>

<style scoped>
.usergram__text {
  margin-left: 0.3em;
}
</style>
