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
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima ut
        nesciunt porro adipisci, dolor distinctio eos neque consequuntur
        accusantium? Soluta veritatis neque laudantium harum non suscipit sequi
        modi porro dolorum.
      </p>
    </div>

    <div class="block">
      <h2>One function does one thing</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima ut
        nesciunt porro adipisci, dolor distinctio eos neque consequuntur
        accusantium? Soluta veritatis neque laudantium harum non suscipit sequi
        modi porro dolorum.
      </p>
    </div>

    <div class="block">
      <h2>Use function name to comment on codes</h2>
      <div class="subblock">
        <h3>What I see other developers do</h3>
        <img class="code-image" src="@/assets/bad.png" alt="Bad code" />
      </div>

      <div class="subblock">
        <h3>What I do</h3>
        <img class="code-image" src="@/assets/good.png" alt="Good code" />
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
.subblock {
  margin-bottom: 1em;
}
.code-image {
  display: block;
  width: min(80%, 300px);
}
</style>
