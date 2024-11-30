<template>
  <AppPanel class="experiences-page">
    <h3 class="experiences-page__title">My work experiences</h3>

    <section class="experiences-page-section">
      <div class="block">
        <div class="period">Nov 2019 - Feb 2024</div>
        <div class="role">Senior frontend web developer</div>
        <div class="company">beBit Inc.</div>
        <div class="description">
          <p>Responsibilities:</p>

          <ul class="disc">
            <li>
              Being the lead engineer of the project of migrating current
              codebase to micro frontends, including planning the project
              roadmap, planning the Sprints, deciding project technologies,
              deciding guidelines for the repository, configuring the repository
              so that guidelines can be automated followed as much as possible,
              etc.
            </li>
            <li>
              Creating the automated test system (lint, unit test, integration
              test, regression test, e2e test, CIs) for the repository to reduce
              manual testing when deploying, and to make PRs more reliable.
            </li>
            <li>
              Working on maintaining the company website (adding features, bug
              fixing, refactoring).
            </li>
            <li>Planning the Sprints.</li>
          </ul>

          <p>Technologies used:</p>

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

      <div class="block">
        <div class="period">Jan 2019 - Nov 2019</div>
        <div class="role">Gap period</div>
        <div class="description">
          <p>Learning VueJS.</p>
        </div>
      </div>

      <div class="block">
        <div class="period">2016 - 2018</div>

        <div class="role">Gap period</div>
        <div class="description">
          <p>Do something else not related to coding.</p>
        </div>
      </div>

      <div class="block">
        <div class="period">Aug 2014 - July 2016</div>
        <div class="role">Product executive</div>
        <div class="company">Zalora Vietnam</div>
        <div class="description">
          <p>Responsibilities:</p>
          <ul class="disc">
            <li>Maintaining the E-commerce site.</li>
            <li>
              Create local tools to improve the productivity of other colleagues
              for daily repeated tasks.
            </li>
          </ul>
          <p>Technologies: PHP, HTML, Javascript, CSS, Excel.</p>
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
  padding: 0;
  padding-top: 1.5em;
}
.experiences-page__title {
  line-height: 1;
  color: var(--color-orange);
  height: 40px;
}
.experiences-page-section {
  width: 100%;
  height: calc(100% - 30px - 1.5em);
  position: relative;
  padding: 1.5em;
  padding-top: 0;
  overflow-y: auto;
}
.experiences-page-section::before {
  content: "";
  position: absolute;
  top: 0.5em;
  left: calc(1.5em + 1px);
  width: 0;
  height: 150%;
  border: 1px solid var(--color-black);
  opacity: 0.8;
}
.block {
  text-align: left;
  position: relative;
  padding-left: 1.5em;
  margin-bottom: 3em;
}
.block::before {
  content: "";
  position: absolute;
  border-radius: 50%;
  border: 3px solid var(--color-white);
  width: 15px;
  height: 15px;
  top: 5px;
  left: -5.5px;
  background-color: var(--color-black);
}
.period {
  font-size: 0.8rem;
  position: absolute;
  top: 0;
  right: 0;
  font-weight: 500;
}
.company {
  color: var(--color-black);
  font-size: 1rem;
  font-weight: 400;
}
.role {
  color: var(--color-black);
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
}
.description {
  margin-top: 1em;
}
.description > p {
  margin-top: 1em;
  margin-bottom: 0.3em;
}
</style>
