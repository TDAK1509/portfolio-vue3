<template>
  <header class="header">
    <h1 class="title"><slot name="title"></slot></h1>
    <div class="subtitle"><slot name="subtitle"></slot></div>
  </header>
</template>

<style scoped>
.header {
  margin-bottom: 1.5em;
}
</style>
