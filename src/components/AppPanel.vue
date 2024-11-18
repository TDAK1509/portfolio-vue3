<template>
  <div class="app-panel">
    <slot></slot>
  </div>
</template>

<style scoped>
.app-panel {
  margin: auto;
  width: 100%;
  max-width: min(90%, 1000px);
  background-color: var(--color-white);
  padding: 2em;
  box-shadow: 8px 8px 10px 0px rgba(0, 0, 0, 0.3);
  position: relative;
}
</style>
