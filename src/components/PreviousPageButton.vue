<template>
  <PageButton>
    <SvgArrowRight class="previous-page-button-icon" />
  </PageButton>
</template>

<script setup>
import PageButton from "@/components/PageButton.vue";
import SvgArrowRight from "@/components/svgs/SvgArrowRight.vue";
</script>

<style scoped>
.previous-page-button-icon {
  width: 40px;
  height: 40px;
  transform: rotate(180deg);
  margin-left: -10px;
}
</style>
