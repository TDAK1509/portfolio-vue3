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
  padding: 1.5em;
  box-shadow: 8px 8px 10px 0px rgba(0, 0, 0, 0.3);
  position: relative;
}

@media only screen and (max-width: 600px) {
  .app-panel {
    padding: 1em;
  }
}
</style>
