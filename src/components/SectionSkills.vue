<template>
  <section class="section">
    <SectionTitle>
      <template #title>Technologies I worked with</template>
    </SectionTitle>

    <div class="block animation-slide-in">
      <h3>Experienced</h3>

      <div class="block-content">
        <div
          class="technology"
          v-for="name in experiencedTechnologies"
          :key="name"
        >
          <img class="technology-icon" :src="getImageSrc(name)" :alt="name" />
          <div class="technology-text">{{ name.split("-").join(" ") }}</div>
        </div>

        <div class="technology">
          <img
            class="technology-icon"
            src="@/assets/technologies/micro-frontends.png"
            alt="micro-frontends"
          />
          <div>Micro Frontends</div>
        </div>
      </div>
    </div>

    <div class="block animation-slide-in">
      <h3>Mediocre</h3>

      <div class="block-content">
        <div
          class="technology"
          v-for="name in mediocreTechnologies"
          :key="name"
        >
          <img class="technology-icon" :src="getImageSrc(name)" :alt="name" />
          <div class="technology-text">{{ name.split("-").join(" ") }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionTitle from "@/components/SectionTitle.vue";
import { useIntersectionObserver } from "@/composables/useIntersectionObserver";

const animationClassName = "block";
useIntersectionObserver(animationClassName);

const experiencedTechnologies = [
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
];

const mediocreTechnologies = [
  "django",
  "aws",
  "linux",
  "bash",
  "digital-ocean",
  "firebase",
  "mysql",
  "nginx",
  "terraform",
  "firebase",
  "react",
];

function getImageSrc(name) {
  return new URL(`../assets/technologies/${name}.svg`, import.meta.url).href;
}
</script>

<style scoped>
.section {
  text-align: center;
  padding: 0 1em;
}
.block {
  margin-top: 1em;
}
.block-content {
  margin-top: 1em;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}
.technology {
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.9);
  padding: 0.8em 1em;
  color: white;
}
.technology-icon {
  width: 24px;
  height: 24px;
}
.technology-text {
  text-transform: capitalize;
}
</style>
