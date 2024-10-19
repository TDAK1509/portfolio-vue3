<template>
  <div class="app">
    <TopBar />
    <main class="main">
      <SectionAbout class="section" />
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
      threshold: 0.1,
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
  padding: 1em 1.5em;
}
.section {
  opacity: 0;
  transform: translateX(150px);
  margin-top: 2.5em;
}
.show {
  opacity: 1;
  transform: translateX(0);
  transition-duration: 0.25s;
  transition-timing-function: ease-in;
}
</style>
