<template>
  <div class="app-panel">
    <h3 v-if="title" class="app-panel__title">{{ title }}</h3>

    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  title: String,
});
</script>

<style scoped>
.app-panel {
  margin: auto;
  width: 100%;
  max-width: min(90%, 1000px);
  background-color: var(--color-white);
  padding: 1.5em;
  box-shadow: 8px 8px 10px 0px rgba(0, 0, 0, 0.3);
  position: relative;
}

.app-panel__title {
  line-height: 1;
  color: var(--color-orange);
  height: 40px;
}

@media only screen and (max-width: 600px) {
  .app-panel {
    padding: 1em;
  }
  .app-panel__title {
    height: 20px;
  }
}
</style>
