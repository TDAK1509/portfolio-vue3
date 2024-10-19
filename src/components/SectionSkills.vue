<template>
  <section>
    <SectionTitle>
      <template #title>Services I offer</template>
      <template #subtitle>
        <div>
          My coding style:
          <ul class="ul">
            <li class="li">Test-driven development (TDD)</li>
            <li class="li">One function does one thing</li>
            <li class="li">Use function name to comment on codes</li>
          </ul>
        </div>
      </template>
    </SectionTitle>

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
.ul {
  margin-left: 1em;
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
</style>
