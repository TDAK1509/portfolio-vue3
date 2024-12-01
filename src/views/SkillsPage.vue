<template>
  <AppPanel class="skills-page" title="My skills">
    <section class="skills-page-section">
      <h4 class="section__title">Soft skills</h4>
      <ul class="disc section__soft-skills">
        <li>Communicating</li>
        <li>Leading</li>
        <li>Planning</li>
        <li>Time management</li>
      </ul>

      <h4 class="section__title">Dev skills</h4>

      <form class="skills-page__form" @submit.prevent="search">
        <input v-model="searchText" type="text" class="form__input" />
        <button class="form__button">Search</button>
      </form>

      <ul class="skills-page__skills">
        <li class="technology" v-for="name in technologies" :key="name">
          <img class="technology-icon" :src="getImageSrc(name)" :alt="name" />
          <div class="technology-text">{{ name.split("-").join(" ") }}</div>
        </li>
      </ul>
    </section>
  </AppPanel>
</template>

<script setup>
import AppPanel from "@/components/AppPanel.vue";
import { ref } from "vue";

const searchText = ref("");

function search() {
  console.log(searchText.value);
}

const technologies = [
  "vue",
  "javascript",
  "typescript",
  "css",
  "html",
  "nodejs",
  "eslint",
  "jest",
  "cypress",
  "docker",
  "git",
  "github-actions",
  "micro-frontends",
  "django",
  "aws",
  "linux",
  "bash",
  "digital-ocean",
  "mysql",
  "nginx",
  "terraform",
  "react",
  "firebase",
];

function getImageSrc(name) {
  if (name === "micro-frontends")
    return new URL(`../assets/technologies/${name}.png`, import.meta.url).href;
  return new URL(`../assets/technologies/${name}.svg`, import.meta.url).href;
}
</script>

<style scoped>
.skills-page {
  height: 500px;
}
.skills-page-section {
  width: 100%;
  height: 100%;
  position: relative;
  text-align: left;
}
.section__title {
  line-height: 1;
  margin-bottom: 0.5rem;
}
.section__title:not(:first-child) {
  margin-top: 0.5em;
}
.skills-page__skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
}
.section__soft-skills {
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 400px;
}
.technology {
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 8px;
  border: 1px solid var(--color-grey-light);
  background-color: var(--color-white);
  padding: 0.4em 1em;
  color: var(--color-black);
}
.technology-icon {
  width: 16px;
  height: 16px;
}
.technology-text {
  text-transform: capitalize;
  font-size: 0.8rem;
  white-space: nowrap;
}
</style>
