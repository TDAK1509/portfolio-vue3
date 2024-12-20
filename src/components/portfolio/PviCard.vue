<template>
  <PortfolioTemplate :images="images" project-name="pvicard.com">
    <template #description>
      <ul class="disc">
        <li>
          <strong>Project type:</strong>
          <span class="pvicard__text">Freelancer service.</span>
        </li>
        <li>
          <strong>Website:</strong>
          <span class="pvicard__text">Project stopped. </span>
        </li>
        <li>
          <strong>Github repositories:</strong>
          <ul class="sub">
            <li>
              <a
                href="https://github.com/TDAK1509/pvicard-web"
                rel="noopener noreferrer"
                target="_blank"
              >
                https://github.com/TDAK1509/pvicard-web
              </a>
            </li>
            <li>
              <a
                href="https://github.com/TDAK1509/pvicard-cronjob"
                rel="noopener noreferrer"
                target="_blank"
              >
                https://github.com/TDAK1509/pvicard-cronjob
              </a>
            </li>
            <li>
              <a
                href="https://github.com/TDAK1509/pvicard-deploy"
                rel="noopener noreferrer"
                target="_blank"
              >
                https://github.com/TDAK1509/pvicard-deploy
              </a>
            </li>
          </ul>
        </li>
        <li>
          <strong>Description:</strong>
          <ul class="sub">
            <li class="pvicard__text">
              Developed a tool for customers to activate purchased insurance
              policies.
            </li>
            <li class="pvicard__text">
              Built a user interface with Django for seamless customer
              interaction.
            </li>
            <li class="pvicard__text">
              Designed an admin dashboard in Django for efficient database
              management.
            </li>
            <li class="pvicard__text">
              Created a Python cron job to integrate with the Lazada API, fetch
              purchased items, and update their status in the database using API
              keys provided by the Django backend.
            </li>
            <li class="pvicard__text">
              Deployed the website using Docker and Nginx on DigitalOcean for
              reliable hosting.
            </li>
          </ul>
        </li>
      </ul>
    </template>
  </PortfolioTemplate>
</template>

<script setup>
import PortfolioTemplate from "./PortfolioTemplate.vue";
import pvicardDesktopImage1 from "@/assets/portfolio/pvicard-desktop-1.png";
import pvicardDesktopImage2a from "@/assets/portfolio/pvicard-desktop-2a.png";
import pvicardDesktopImage2b from "@/assets/portfolio/pvicard-desktop-2b.png";
import pvicardMobileImage1a from "@/assets/portfolio/pvicard-mobile-1a.png";
import pvicardMobileImage1b from "@/assets/portfolio/pvicard-mobile-1b.png";
import pvicardMobileImage2 from "@/assets/portfolio/pvicard-mobile-2.png";

const images = [
  {
    src: pvicardDesktopImage1,
    isDesktop: true,
  },
  {
    src: pvicardMobileImage1a,
    isMobile: true,
    style: { objectPosition: "0 0" },
  },

  {
    src: pvicardMobileImage1b,
    isMobile: true,
    style: { objectPosition: "0 0" },
  },
  {
    src: pvicardDesktopImage2a,
    isDesktop: true,
  },
  {
    src: pvicardDesktopImage2b,
    isDesktop: true,
  },

  {
    src: pvicardMobileImage2,
    isMobile: true,
  },
];
</script>

<style scoped>
.pvicard__text {
  margin-left: 0.3em;
}
</style>
