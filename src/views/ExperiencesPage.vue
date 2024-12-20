<template>
  <AppPanel class="experiences-page" title="My work experiences">
    <section class="experiences-page-section">
      <div class="block">
        <div class="period">Nov 2019 - Feb 2025</div>
        <div class="role">Senior frontend web developer</div>
        <div class="company">beBit Inc.</div>
        <div class="description">
          <p class="description__title">Responsibilities:</p>

          <ul class="disc">
            <li>
              Led the migration of a Vue2 monolithic codebase to a Vue3
              microfrontend architecture, enhancing scalability and
              maintainability.
            </li>
            <li>
              Implemented automated tests and CI systems for the front end,
              reducing release time from 30-60 minutes to 10-15 minutes.
            </li>
            <li>
              Developed a semi-automated release process, improving release
              quality and efficiency, enabling multiple small releases per
              sprint instead of a single large release.
            </li>
            <li>
              Documented the front-end onboarding process, streamlining
              developer onboarding and reducing reliance on direct support.
            </li>
            <li>
              Mentored team members by resolving challenges, fostering
              collaboration, and enhancing overall project efficiency.
            </li>
            <li>
              Reviewed 100-200 PRs per quarter, maintaining code quality through
              thorough code reviews.
            </li>
            <li>
              Contributed 50-100 PRs per quarter, driving feature development
              and improving the codebase.
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
          </ul>

          <p class="description__title">Technologies used:</p>

          <ul class="disc">
            <li>
              Frontend technologies: Vue2, Vue3, Vuex, Typescript, SCSS,
              Storybook, Micro Frontends
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
        <div class="period">2016 - Nov 2019</div>

        <div class="role">Self-Learning and Career Transition</div>
        <div class="description">
          <ul class="disc">
            <li>Pursued non-technical roles.</li>
            <li>
              Dedicated one year to learning programming fundamentals and
              mastering VueJS, transitioning into a front-end development
              career.
            </li>
          </ul>
        </div>
      </div>

      <div class="block">
        <div class="period">Aug 2014 - July 2016</div>
        <div class="role">Product executive</div>
        <div class="company">Zalora Vietnam</div>
        <div class="description">
          <p class="description__title">Responsibilities:</p>
          <ul class="disc">
            <li>
              Developed local automation tools that enhanced daily task
              efficiency for colleagues, reducing task completion time from 1-3
              hours to just 15-30 minutes.
            </li>
            <li>
              Managed the company's e-commerce website using a dashboard
              provided by the parent company in Singapore, ensuring smooth
              operations and timely updates.
            </li>
            <li>
              Implemented interactive mini JavaScript web games to support
              campaign launches, boosting user engagement and campaign
              effectiveness.
            </li>
            <li>
              Converted Photoshop designs into responsive and optimized HTML
              code for seamless integration on the company website.
            </li>
          </ul>
          <p class="description__title">
            Technologies: PHP, HTML, Javascript, CSS, Excel.
          </p>
          <ul class="disc">
            <li>PHP</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>MySQL</li>
            <li>JavaScript</li>
            <li>Excel</li>
          </ul>
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
.description__title {
  font-weight: 500;
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
