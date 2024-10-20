<template>
  <section class="section">
    <SectionTitle>
      <template #title>Services I offer</template>
      <template #subtitle>
        <div>Lorem ipsum</div>
      </template>
    </SectionTitle>

    <div class="polygon-container">
      <div class="polygon-grid">
        <div class="polygon">
          <h4 class="polygon-title">Test-driven development (TDD)</h4>
          <div class="polygon-content">
            <ul class="ul">
              <li class="li">Write test</li>
              <li class="li">Make test pass</li>
              <li class="li">Beautify the codes</li>
              <li class="li">Repeat</li>
            </ul>
          </div>
        </div>

        <div class="polygon">
          <h4 class="polygon-title">Single responsibility</h4>
          <p class="polygon-content">One function only does one thing.</p>
        </div>

        <div class="polygon">
          <h4 class="polygon-title">Long names over commenting</h4>
          <p class="polygon-content">
            Rarely write comments on codes, use meaningful names instead.
          </p>
        </div>
      </div>
    </div>

    <div class="block">
      <h2>Test-driven development (TDD)</h2>
      <ul class="ul">
        <li class="li">
          Before I fix a bug, I add test to replicate the bug, then write codes
          to make it pass.
        </li>
        <li class="li">
          Whenever working on a new feature, I always try to write tests
          according to the specifications, then write codes to make them pass.
        </li>
      </ul>
    </div>

    <div class="block">
      <h2>One function does one thing</h2>
      <div class="subblock">
        <h3 class="h3">I don't do</h3>
        <img
          class="code-image"
          src="@/assets/bad-one-function-does-one-thing.png"
          alt="Bad one function does one thing"
        />
      </div>

      <div class="subblock">
        <h3 class="h3">I do</h3>
        <img
          class="code-image"
          src="@/assets/good-one-function-does-one-thing.png"
          alt="Good one function does one thing"
        />
      </div>
    </div>

    <div class="block">
      <h2>Use function name to comment on codes</h2>
      <div class="subblock">
        <h3 class="h3">I don't do</h3>
        <img
          class="code-image"
          src="@/assets/bad-comment-codes.png"
          alt="Bad comments on codes"
        />
      </div>

      <div class="subblock">
        <h3 class="h3">I do</h3>
        <img
          class="code-image"
          src="@/assets/good-comment-codes.png"
          alt="Good comments on codes"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionTitle from "@/components/SectionTitle.vue";
</script>

<style scoped>
.section {
  text-align: center;
}
.ul {
  text-align: left;
}
.li {
  list-style-type: disc;
}
.block {
  margin-bottom: 1.2em;
}
.subblock {
  margin-bottom: 1em;
}
.h3 {
  color: var(--color-subtitle);
}
.code-image {
  display: block;
  width: min(80%, 300px);
}
.polygon-container {
  margin-top: 2em;
  text-align: center;
}
.polygon-grid {
  --col-size: 150px;
  --col-gap: 16px;
  --col-count: 4;
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(var(--col-count), var(--col-size));
  grid-template-rows: repeat(5, 100px);
  column-gap: 16px;
  row-gap: 20px;
  width: calc(
    var(--col-size) * var(--col-count) + var(--col-gap) * (var(--col-count) - 1)
  );
  margin: auto;
}
.polygon {
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  height: 300px;
  width: 100%;
  background-color: black;
  color: white;
  grid-row-end: span 3;
  grid-column-end: span 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
  text-align: center;
}
.polygon:nth-child(1) {
  grid-column-start: 1;
  grid-row-start: 1;
}
.polygon:nth-child(2) {
  grid-column-start: 3;
  grid-row-start: 1;
}
.polygon:nth-child(3) {
  grid-column-start: 2;
  grid-row-start: 3;
}
.polygon-title {
  font-size: 0.9rem;
}
.polygon-content {
  font-size: 0.8rem;
}
.polygon-content .li {
  font-size: 0.8rem;
}
</style>
