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

    <div class="block">
      <h4>Single responsibility</h4>
      <p>One function only does one thing.</p>
    </div>

    <div class="block">
      <h4>Long names over commenting</h4>
      <p>Rarely write comments on codes, use meaningful names instead.</p>
    </div>

    <!-- 

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
    </div> -->
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
  margin-bottom: 0.7em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
