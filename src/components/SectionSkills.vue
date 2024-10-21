<template>
  <section class="section">
    <SectionTitle>
      <template #title>My skills</template>
      <template #subtitle> I'm not scared of CSS 😅. </template>
    </SectionTitle>

    <div class="block">
      <h3>Experienced</h3>

      <div class="block-content">
        <div class="technology">
          <img
            class="technology-icon"
            src="@/assets/technologies/vue.svg"
            alt="vue"
          />
          <div>Vue</div>
        </div>

        <div class="technology">
          <img
            class="technology-icon"
            src="@/assets/technologies/javascript.svg"
            alt="javascript"
          />
          <div>Javascript</div>
        </div>

        <div class="technology">
          <img
            class="technology-icon"
            src="@/assets/technologies/typescript.svg"
            alt="typescript"
          />
          <div>Typescript</div>
        </div>

        <div class="technology">
          <img
            class="technology-icon"
            src="@/assets/technologies/css.svg"
            alt="css"
          />
          <div>CSS</div>
        </div>

        <div class="technology">
          <img
            class="technology-icon"
            src="@/assets/technologies/html.svg"
            alt="html"
          />
          <div>HTML</div>
        </div>

        <div class="technology">
          <img
            class="technology-icon"
            src="@/assets/technologies/nodejs.svg"
            alt="nodejs"
          />
          <div>NodeJs</div>
        </div>

        <div class="technology">
          <img
            class="technology-icon"
            src="@/assets/technologies/eslint.svg"
            alt="eslint"
          />
          <div>Eslint</div>
        </div>

        <div class="technology">
          <img
            class="technology-icon"
            src="@/assets/technologies/jest.svg"
            alt="jest"
          />
          <div>Jest</div>
        </div>

        <div class="technology">
          <img
            class="technology-icon"
            src="@/assets/technologies/cypress.svg"
            alt="cypress"
          />
          <div>Cypress</div>
        </div>

        <div class="technology">
          <img
            class="technology-icon"
            src="@/assets/technologies/docker.svg"
            alt="docker"
          />
          <div>Docker</div>
        </div>

        <div class="technology">
          <img
            class="technology-icon"
            src="@/assets/technologies/git.svg"
            alt="git"
          />
          <div>Git</div>
        </div>

        <div class="technology">
          <img
            class="technology-icon"
            src="@/assets/technologies/github.svg"
            alt="github"
          />
          <div>Github Actions</div>
        </div>

        <div class="technology">
          <img
            class="technology-icon"
            src="@/assets/technologies/bash.svg"
            alt="bash"
          />
          <div>Bash</div>
        </div>

        <div class="technology">
          <img
            class="technology-icon"
            src="@/assets/technologies/micro-frontends.png"
            alt="micro-frontends"
          />
          <div>Micro Frontends</div>
        </div>
      </div>
    </div>

    <div class="block">
      <h3>Mediocre</h3>

      <div class="block-content">
        <div class="technology">
          <img
            class="technology-icon"
            src="@/assets/technologies/django.svg"
            alt="django"
          />
          <div>Django</div>
        </div>

        <div class="technology">
          <img
            class="technology-icon"
            src="@/assets/technologies/aws.svg"
            alt="aws"
          />
          <div>AWS</div>
        </div>

        <div class="technology">
          <img
            class="technology-icon"
            src="@/assets/technologies/linux.svg"
            alt="linux"
          />
          <div>Linux</div>
        </div>

        <div class="technology">
          <img
            class="technology-icon"
            src="@/assets/technologies/digital-ocean.svg"
            alt="digital-ocean"
          />
          <div>Digital Ocean</div>
        </div>
      </div>
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
.block {
  margin-top: 1em;
}
.block-content {
  margin-top: 1em;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}
.technology {
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.9);
  padding: 0.8em 1em;
  color: white;
}
.technology-icon {
  width: 24px;
  height: 24px;
}
</style>
