<template>
  <section class="section">
    <SectionTitle>
      <template #title>My coding style</template>
    </SectionTitle>

    <div class="block">
      <h4>Test-driven development (TDD)</h4>

      <ul class="ul">
        <li class="li">Write test</li>
        <li class="li">Make test pass</li>
        <li class="li">Beautify the codes</li>
        <li class="li">Repeat</li>
      </ul>
    </div>

    <div class="block" @click="toggleSubBlock('single-responsibility')">
      <h4>Single responsibility</h4>
      <p>One function only does one thing.</p>
    </div>

    <div ref="singleResponsibilitySubBlock" class="sub-block">
      <h5 class="h5">I don't do</h5>
      <img
        class="sub-block-image"
        src="@/assets/bad-one-function-does-one-thing.png"
        alt="Bad one function does one thing"
      />
      <h5 class="h5">I do</h5>
      <img
        class="sub-block-image"
        src="@/assets/good-one-function-does-one-thing.png"
        alt="Good one function does one thing"
      />
    </div>

    <div class="block" @click="toggleSubBlock('long-names')">
      <h4>Long names over commenting</h4>
      <p>Rarely write comments on codes, use meaningful names instead.</p>
    </div>

    <div ref="longNamesSubBlock" class="sub-block">
      <h5 class="h5">I don't do</h5>
      <img
        class="sub-block-image"
        src="@/assets/bad-comment-codes.png"
        alt="Bad comments on codes"
      />
      <h5 class="h5">I do</h5>
      <img
        class="sub-block-image"
        src="@/assets/good-comment-codes.png"
        alt="Good comments on codes"
      />
    </div>
  </section>
</template>

<script setup>
import SectionTitle from "@/components/SectionTitle.vue";
import { ref } from "vue";

const singleResponsibilitySubBlock = ref();
const longNamesSubBlock = ref();

function toggleSubBlock(type) {
  if (type === "single-responsibility") {
    toggleSubBlockByRef(singleResponsibilitySubBlock.value);
  } else if (type === "long-names") {
    toggleSubBlockByRef(longNamesSubBlock.value);
  }
}

function toggleSubBlockByRef(element) {
  if (!element) return;
  element.classList.toggle("show");
}
</script>

<style scoped>
.section {
  text-align: center;
  padding: 0 1em;
}
.ul {
  text-align: left;
  margin-left: 1em;
}
.li {
  list-style-type: disc;
}
.block {
  background-color: black;
  color: white;
  height: 200px;
  border-radius: 10px;
  padding: 1.5em 2em 2em 2em;
  margin-top: 0.7em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.sub-block {
  text-align: left;
  margin-top: 0.5em;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease-out;
}
.sub-block.show {
  transition: max-height 0.5s ease-in;
  max-height: 1000px;
}

@keyframes slideDown {
  0% {
    opacity: 0;
    height: 0;
  }
  100% {
    opacity: 1;
    height: 100%;
  }
}
.sub-block-image {
  width: 100%;
}
.h5 {
  font-size: 0.8rem;
  margin-bottom: 0.3rem;
}
</style>
