<template>
  <PageButton>
    <SvgArrowRight class="next-page-button-icon" />
  </PageButton>
</template>

<script setup>
import PageButton from "@/components/PageButton.vue";
import SvgArrowRight from "@/components/svgs/SvgArrowRight.vue";
</script>

<style scoped>
.next-page-button-icon {
  width: 40px;
  height: 40px;
  display: inline-block;
  margin-right: -10px;
}
</style>
