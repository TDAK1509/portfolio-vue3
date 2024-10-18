<template>
  <div class="app">
    <TopBar />
    <main class="main">
      <SectionAbout />
      <SectionSkills />
    </main>
  </div>
</template>

<script setup>
import TopBar from "./components/TopBar.vue";
import SectionAbout from "./components/SectionAbout.vue";
import SectionSkills from "./components/SectionSkills.vue";
</script>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.main {
  flex: 1;
  padding: 1em;
}
</style>
