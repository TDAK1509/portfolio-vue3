<template>
  <div class="app">
    <main class="main">
      <SectionAbout />
    </main>
  </div>
</template>

<script setup>
import SectionAbout from "@/components/SectionAbout.vue";
</script>

<style scoped>
.app {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.main {
  background-color: var(--color-white);
  width: 90%;
  max-width: 1000px;
  height: 500px;
  padding: 2em;
  box-shadow: 8px 8px 10px 0px rgba(0, 0, 0, 0.3);
}
</style>
