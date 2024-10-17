<template>
  <div class="app">
    <TopBar />
    <main class="main">
      <AppAbout />
    </main>
  </div>
</template>

<script setup>
import TopBar from "./components/TopBar.vue";
import AppAbout from "./components/AppAbout.vue";
</script>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.main {
  flex: 1;
}
</style>
