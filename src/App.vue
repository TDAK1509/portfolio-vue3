<template>
  <div class="app">
    <TopBar />
    <main class="main">
      <SectionAbout class="section" />
      <SectionServices class="section" />
      <SectionSkills class="section" />
      <SectionCodingStyle class="section" />
      <SectionExperience class="section" />
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
  max-width: 800px;
  margin: auto;
  width: 100%;
}
@media only screen and (max-width: 600px) {
  .main {
    padding-left: 0;
    padding-right: 0;
  }
}
.section {
  margin-top: 2.5em;
}
</style>
