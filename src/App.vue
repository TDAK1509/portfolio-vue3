<template>
  <div class="app">
    <TopBar />
    <main class="main">
      <SectionAbout class="section" />
      <SectionSkills class="section" />
      <SectionSkills class="section" />
      <SectionSkills class="section" />
      <SectionSkills class="section" />
      <SectionSkills class="section" />
    </main>
  </div>
</template>

<script setup>
import TopBar from "./components/TopBar.vue";
import SectionAbout from "./components/SectionAbout.vue";
import SectionSkills from "./components/SectionSkills.vue";
import { onMounted, onBeforeUnmount } from "vue";

let observer;

onMounted(() => {
  const sections = document.querySelectorAll(".section");
  observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("show");
        else entry.target.classList.remove("show");
      });
    },
    {
      threshold: 0.2,
    }
  );
  sections.forEach(section => {
    observer.observe(section);
  });
});

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
  padding: 1em;
}
.section {
  opacity: 0;
  transform: translateX(150px);
}
.show {
  opacity: 1;
  transform: translateX(0);
  transition-duration: 0.2s;
  transition-timing-function: ease-in;
}
</style>
