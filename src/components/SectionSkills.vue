<template>
  <section>
    <SectionTitle>
      <template #title>Services I offer</template>
      <template #subtitle>I develop frontend in TDD style</template>
    </SectionTitle>

    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita error
      neque deleniti veritatis velit doloribus, quis et at debitis, eveniet
      quasi quibusdam. Hic molestias provident harum laborum recusandae ducimus
      excepturi.
    </p>

    <img class="code-image" src="@/assets/bad.png" alt="Bad code" />
    <img class="code-image" src="@/assets/good.png" alt="Good code" />
  </section>
</template>

<script setup>
import SectionTitle from "@/components/SectionTitle.vue";
</script>

<style scoped>
.code-image {
  display: block;
  width: 200px;
}
</style>
