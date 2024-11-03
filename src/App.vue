<template>
  <div class="app">
    <TopBar />
    <main class="main">
      <SectionAbout id="about" class="app-section" />
      <SectionServices id="services" class="app-section" />
      <SectionSkills id="skills" class="app-section" />
      <SectionCodingStyle id="coding-style" class="app-section" />
      <SectionExperience id="experience" class="app-section" />
    </main>
  </div>
</template>

<script setup>
import TopBar from "./components/TopBar.vue";
import SectionAbout from "./components/SectionAbout.vue";
import SectionCodingStyle from "./components/SectionCodingStyle.vue";
import SectionExperience from "./components/SectionExperience.vue";
import SectionServices from "./components/SectionServices.vue";
import SectionSkills from "./components/SectionSkills.vue";
import { onMounted, onBeforeUnmount } from "vue";

let observer;

onMounted(() => {
  const sections = document.querySelectorAll(".app-section");
  observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          highlightMenu(entry.target.id);
        }
      });
    },
    {
      threshold: 0.3,
    }
  );
  sections.forEach(section => {
    observer.observe(section);
  });
});

function highlightMenu(elementId) {
  const element = document.querySelector(`[data-menu-observer='${elementId}']`);
  if (element) {
    const allMenuItems = document.querySelectorAll("#menu .li");
    allMenuItems.forEach(item => {
      item.classList.remove("active");
    });
    element.classList.add("active");
  }
}

onBeforeUnmount(() => {
  observer.disconnect();
});
</script>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-x: hidden;
}
.main {
  flex: 1;
  padding: 1em 1.5em;
  margin: auto;
  width: 100%;
}
@media only screen and (max-width: 600px) {
  .main {
    padding-left: 0;
    padding-right: 0;
  }
}
.app-section {
  margin-top: 2.5em;
}
</style>
