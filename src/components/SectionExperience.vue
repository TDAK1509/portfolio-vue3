<template>
  <section class="section">
    <SectionTitle>
      <template #title>Work experience</template>
    </SectionTitle>

    <div class="content">
      <div class="block">
        <h4 class="period">Nov 2019 - Feb 2024</h4>
        <div class="block-content">
          <h5 class="position">Frontend web developer</h5>
          <h5 class="company">beBit Inc.</h5>
          <div class="description">
            <ul class="disc">
              <li>
                Being the lead engineer of the project of migrating current
                codebase to micro frontends.
              </li>
              <li>
                Creatingd the automated test system (lint, unit test,
                integration test, regression test, e2e test, CIs) for the
                repository to reduce manual testing when deploying, and to make
                PRs more reliable.
              </li>
              <li>
                Working on maintaining the company website (adding features, bug
                fixing, refactoring).
              </li>
              <li>Planning the Sprints.</li>
            </ul>

            <h6>Technologies used:</h6>

            <ul class="disc">
              <li>
                Frontend technologies: Vue, Typescript, SASS, Micro Frontends
              </li>
              <li>
                Backend technologies: Django, Python, Docker, Terraform, AWS
              </li>
              <li>Lint & test: Eslint, Jest, Cypress, RegSuit</li>
              <li>Tools: Github Actions, Vite, Turborepo, Sentry</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="block">
        <h4 class="period">Jan 2019 - Nov 2019</h4>
        <div class="block-content">
          <div class="block-content"></div>
          <h5 class="position">Unemployment</h5>
          <div class="description">
            <p>Learning VueJS.</p>
          </div>
        </div>
      </div>

      <div class="block">
        <h4 class="period">2016 - 2018</h4>
        <div class="block-content">
          <h5 class="position">Unemployment</h5>
          <div class="description">
            <p>Do something else not related to coding.</p>
          </div>
        </div>
      </div>

      <div class="block">
        <h4 class="period">Aug 2014 - July 2016</h4>
        <div class="block-content">
          <h5 class="position">Product executive</h5>
          <h5 class="company">Zalora Vietnam</h5>
          <div class="description">
            <ul class="disc">
              <li>Maintaining the E-commerce site.</li>
              <li>
                Create local tools to improve the productivity of other
                colleagues for daily repeated tasks.
              </li>
            </ul>

            <p>Technologies: PHP, HTML, Javascript, CSS, Excel.</p>
          </div>
        </div>
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
  padding: 0 1em;
}
.content {
  position: relative;
  display: block;
  padding-top: 2em;
}
.content::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  border: 2px solid hsla(0, 0%, 0%, 0.4);
}
.block {
  display: flex;
  text-align: left;
  position: relative;
  padding-left: 1em;
}
.block::before {
  content: "";
  position: absolute;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  top: 7px;
  left: -6px;
  background-color: black;
}
.block::after {
  content: "";
  position: absolute;
  border-radius: 50%;
  top: 11px;
  left: -2px;
  width: 8px;
  height: 8px;
  background-color: #fff;
}

@media only screen and (max-width: 600px) {
  .block {
    flex-direction: column;
  }
}
</style>
