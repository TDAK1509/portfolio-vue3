<template>
  <section class="section">
    <SectionTitle>
      <template #title>My skills</template>
      <template #subtitle>
        My best skills are frontend related, and I have enough-to-use knowledge
        about backend.
      </template>
    </SectionTitle>

    <div class="block">
      <h3>Experienced</h3>

      <div class="block-content">vue</div>
    </div>

    <div class="block">
      <h3>Mediocre</h3>

      <div class="block-content">vue</div>
    </div>

    <div class="block">
      <h3>Tried before</h3>

      <div class="block-content">vue</div>
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
</style>
