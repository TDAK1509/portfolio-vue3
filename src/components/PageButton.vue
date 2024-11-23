<template>
  <button class="page-button">
    <slot></slot>
  </button>
</template>

<style scoped>
.page-button {
  transition: all 0.2s ease;
  background: none;
  border: none;
  color: var(--color-black);
}
@media only screen and (min-width: 601px) {
  .page-button:not(:disabled):hover {
    transform: scale(1.2);
  }
}
</style>
