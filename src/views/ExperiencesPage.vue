<template>
  <AppPanel class="experiences-page" title="My work experiences">
    <section class="experiences-page-section">
      <div class="block">
        <div class="period">Nov 2019 - Feb 2025</div>
        <div class="role">Senior frontend web developer</div>
        <div class="company">beBit Inc.</div>
        <div class="description">
          <p>Responsibilities:</p>

          <ul class="disc">
            <li>
              Being the lead engineer of the project of migrating current
              codebase to micro frontends, which including (but not limited to):
              <ul class="sub">
                <li>Planning the project roadmap</li>
                <li>Planning the Sprints</li>
                <li>Deciding project technologies</li>
                <li>Deciding guidelines for the repository</li>
                <li>
                  Configuring the repository so that guidelines can be automated
                  followed as much as possible.
                </li>
              </ul>
            </li>
            <li>
              Creating the automated test system (lint, unit test, integration
              test, regression test, e2e test, CIs) for the repository to reduce
              manual testing when deploying, and to make PRs more reliable.
            </li>
            <li>
              Creating tools to make developers' lives easier:
              <ul class="sub">
                <li class="usergram__text">
                  <span>Github action marketplace:</span>
                  <a
                    href="https://github.com/marketplace/actions/set-pr-labels-based-on-pr-title"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Set PR labels based on PR title
                  </a>
                </li>
                <li class="usergram__text">
                  <span>VSCode extension:</span>
                  <a
                    href="https://marketplace.visualstudio.com/items?itemName=TDAK1509.with-functions-generator"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    with-functions-generator
                  </a>
                </li>
              </ul>
            </li>
            <li>
              Using Github actions and Slack to create a tool for generating an
              operation checklist for deployment and release, so that developers
              can just copy & paste from the checklist to perform their
              releases.
            </li>
            <li>
              Developing the company website when receiving requests from design
              team.
            </li>
          </ul>

          <p>Technologies used:</p>

          <ul class="disc">
            <li>
              Frontend technologies: Vue, Typescript, SASS, Storybook, Micro
              Frontends
            </li>
            <li>
              Backend technologies: Django, Python, Docker, Terraform, AWS
            </li>
            <li>Lint & test: Eslint, Jest, Cypress, RegSuit</li>
            <li>Tools: Github Actions, Vite, Turborepo, Sentry.</li>
          </ul>
        </div>
      </div>

      <div class="block">
        <div class="period">Jan 2019 - Nov 2019</div>
        <div class="role">Gap period</div>
        <div class="description">
          <p>Learned VueJS.</p>
        </div>
      </div>

      <div class="block">
        <div class="period">2016 - 2018</div>

        <div class="role">Gap period</div>
        <div class="description">
          <p>Did something else not related to coding.</p>
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
              Creating local tools to improve the productivity of other
              colleagues for daily repeated tasks.
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
  padding: 1.5em 0;
}
.experiences-page-section {
  width: 100%;
  height: calc(100% - 30px - 1.5em);
  position: relative;
  padding: 0 1.5em;
  overflow-y: auto;
}

.block {
  text-align: left;
  position: relative;
  padding-left: 1.5em;
  margin-bottom: 3em;
}
.block:last-child {
  margin-bottom: 0em;
}

.block::before {
  content: "";
  position: absolute;
  top: 0.5em;
  left: 1px;
  width: 0;
  height: calc(100% + 3em);
  border: 1px solid var(--color-black);
  opacity: 0.8;
}
.block::after {
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
@media only screen and (max-width: 600px) {
  .experiences-page {
    font-size: 0.8rem;
    padding-top: 1em;
  }
  .experiences-page-section {
    padding: 0 1em;
  }
  .block {
    padding-left: 1em;
  }
  .block::before {
    top: 1em;
  }
  .period {
    position: relative;
    inset: auto;
    padding-top: 0.2em;
    margin-bottom: 0.5em;
  }
  .company,
  .role {
    font-size: 0.8rem;
  }
  .role {
    letter-spacing: 0;
  }

  .description {
    margin-top: 0.5em;
  }
  .description > p {
    margin-top: 0.5em;
    margin-bottom: 0.3em;
  }
}
</style>
