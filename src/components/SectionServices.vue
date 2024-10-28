<template>
  <section class="section">
    <SectionTitle>
      <template #title>What I can do for you</template>
    </SectionTitle>

    <div class="block">
      <ul class="disc">
        <li>Lead engineer</li>
        <li>Senior frontend development</li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import SectionTitle from "@/components/SectionTitle.vue";
</script>

<style scoped>
.section {
  text-align: center;
  padding: 0 1em;
}
.block {
  width: min(300px, 80%);
  margin: auto;
}
</style>
