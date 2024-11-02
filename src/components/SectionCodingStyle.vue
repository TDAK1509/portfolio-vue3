<template>
  <section class="section">
    <SectionTitle>
      <template #title>My coding style</template>
    </SectionTitle>

    <div class="block animation-slide-in">
      <h4>Test-driven development (TDD)</h4>

      <ul class="disc">
        <li>Write test</li>
        <li>Make test pass</li>
        <li>Beautify the codes</li>
        <li>Repeat</li>
      </ul>
    </div>

    <div
      class="block block--expandable animation-slide-in"
      @click="toggleSubBlock('single-responsibility')"
    >
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

    <div
      class="block block--expandable animation-slide-in"
      @click="toggleSubBlock('long-names')"
    >
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
import { useIntersectionObserver } from "@/composables/useIntersectionObserver";
import { ref } from "vue";

const animationClassName = "block";
useIntersectionObserver(animationClassName);

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

  const isExpanding = !element.classList.contains("show");
  element.classList.toggle("show");

  if (isExpanding) {
    setTimeout(() => {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 300);
  }
}
</script>

<style scoped>
.section {
  text-align: center;
  padding: 0 1em;
}
.block {
  background-color: var(--color-primary);
  color: white;
  height: 200px;
  border-radius: 10px;
  padding: 1.5em 2em 2em 2em;
  margin-top: 0.7em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}
.block.block--expandable {
  cursor: pointer;
}
.block--expandable::after {
  content: "Click to see more";
  text-decoration: underline;
  font-size: 0.7rem;
  position: absolute;
  bottom: 1.5em;
  left: 50%;
  transform: translateX(-50%);
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
.sub-block-image {
  width: 100%;
}
.h5 {
  font-size: 0.8rem;
  margin-bottom: 0.3rem;
}
</style>
