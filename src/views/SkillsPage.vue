<template>
  <AppPanel class="skills-page" title="My skills">
    <section class="skills-page-section">
      <h4 class="section__title">Soft skills</h4>
      <ul class="disc section__soft-skills">
        <li>Communicating</li>
        <li>Leading</li>
        <li>Planning</li>
        <li>Time managing</li>
      </ul>

      <h4 class="section__title">Dev skills</h4>

      <form class="skills-page__form" @submit.prevent="search">
        <input
          v-model="searchText"
          type="text"
          placeholder="search for skills"
          class="form__input"
        />
        <button class="form__button" disabled>
          <SvgSearch class="form__button-icon" />
        </button>
      </form>

      <ul class="skills-page__skills">
        <li class="technology" v-for="name in technologiesToDislay" :key="name">
          <img class="technology-icon" :src="getImageSrc(name)" :alt="name" />
          <div class="technology-text">{{ name.split("-").join(" ") }}</div>
        </li>
      </ul>
    </section>
  </AppPanel>
</template>

<script setup>
import AppPanel from "@/components/AppPanel.vue";
import SvgSearch from "@/components/svgs/SvgSearch.vue";
import { ref, computed } from "vue";

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

const searchText = ref("");

const technologiesToDislay = computed(() => {
  if (!searchText.value) return technologies;
  const searchTextLowerCase = searchText.value
    .replace(" ", "-")
    .toLocaleLowerCase();
  return technologies.filter(technology =>
    technology.includes(searchTextLowerCase)
  );
});

function getImageSrc(name) {
  if (name === "micro-frontends")
    return new URL(`../assets/technologies/${name}.png`, import.meta.url).href;
  return new URL(`../assets/technologies/${name}.svg`, import.meta.url).href;
}
</script>

<style scoped>
.skills-page {
  height: 500px;
  overflow-y: auto;
  padding: 1.5em 0;
}
.skills-page-section {
  width: 100%;
  height: calc(100% - 30px - 1.5em);
  padding: 0 1.5em;
  overflow-y: auto;
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
  gap: 0.3em;
  border-radius: 8px;
  border: 1px solid var(--color-grey-light);
  background-color: var(--color-white);
  padding: 0.4em 0.7em;
  color: var(--color-black);
}
.technology-icon {
  width: 16px;
  height: 16px;
}
.technology-text {
  text-transform: capitalize;
  font-size: 0.8em;
  white-space: nowrap;
}
.skills-page__form {
  position: relative;
  margin-bottom: 1em;
  display: inline-block;
  padding: 0.3em 0.5em;
  border: 1px solid var(--color-grey-light);
  border-radius: 7px;
  width: 200px;
}
.form__input {
  border: none;
  font-size: 1em;
  color: var(--color-grey);
  width: 85%;
}
.form__button {
  position: absolute;
  top: 50%;
  right: 0.5em;
  transform: translateY(-50%);
  background-color: var(--color-white);
  color: var(--color-grey);
  display: flex;
  align-items: center;
}
.form__button-icon {
  width: 24px;
  height: 24px;
}

@media only screen and (max-width: 600px) {
  .skills-page {
    font-size: 0.8rem;
    padding-top: 1em;
    height: 80vh;
  }
  .skills-page-section {
    padding: 0 1em;
  }
  .section__title {
    font-size: 0.9rem;
  }
  .skills-page__form {
    padding: 0.3em 0.5em;
    width: 100%;
  }
  .skills-page__skills {
    display: grid;
    grid-template-columns: 45% 45%;
    justify-content: space-between;
  }
  .technology {
    gap: 0.5em;
  }
}
</style>
