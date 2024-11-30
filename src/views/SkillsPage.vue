<template>
  <AppPanel class="skills-page">
    <section class="skills-page-section">
      <form class="skills-page__form" @submit.prevent="search">
        <input v-model="searchText" type="text" />
        <button class="form__button">Search</button>
      </form>

      <ul class="skills-page__skills">
        <li>VueJS</li>
        <li>Typescript</li>
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
</script>

<style scoped>
.skills-page {
  height: 500px;
}
.skills-page-section {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
