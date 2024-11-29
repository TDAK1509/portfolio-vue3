<template>
  <AppPanel class="experiences-page">
    <section class="experiences-page-section">
      <div class="block">
        <div class="period">Nov 2019 - Feb 2024</div>
        <div class="block-content">
          <div class="company">beBit Inc.</div>
          <div class="role">Frontend web developer</div>
          <div class="description">
            <h5>Responsibilities:</h5>

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

            <h5>Technologies used:</h5>

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
        <div class="period">Jan 2019 - Nov 2019</div>
        <div class="block-content">
          <div class="block-content"></div>
          <h5 class="position">Unemployment</h5>
          <div class="description">
            <p>Learning VueJS.</p>
          </div>
        </div>
      </div>

      <div class="block">
        <div class="period">2016 - 2018</div>
        <div class="block-content">
          <div class="position">Unemployment</div>
          <div class="description">
            <p>Do something else not related to coding.</p>
          </div>
        </div>
      </div>

      <div class="block">
        <div class="period">Aug 2014 - July 2016</div>
        <div class="block-content">
          <div class="position">Product executive</div>
          <div class="company">Zalora Vietnam</div>
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
    </section>
  </AppPanel>
</template>

<script setup>
import AppPanel from "@/components/AppPanel.vue";
</script>

<style scoped>
.experiences-page {
  margin-bottom: 2em;
  height: 650px;
  position: relative;
  font-size: 0.9rem;
}
.experiences-page-section {
  overflow-y: auto;
  width: 100%;
  height: 100%;
  position: relative;
  padding-left: 0.5em;
  padding-top: 1.5em;
}
.experiences-page-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0.5em;
  width: 0;
  height: calc(100% + 8em);
  border: 2px solid hsla(0, 0%, 0%, 0.4);
}
.block {
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
  background-color: var(--color-black);
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
.period {
  color: var(--color-orange);
  font-size: 1.2rem;
  font-weight: 700;
}
.company {
  color: var(--color-black);
  font-size: 1.1rem;
  font-weight: 700;
}
.role {
  font-size: 1rem;
  font-weight: 700;
}
</style>
