<template>
  <PortfolioTemplate :images="images" project-name="Usergram">
    <template #description>
      <ul class="disc">
        <li>
          <strong>Project type:</strong>
          <span class="usergram__text">work for company</span>
          <a
            href="https://www.bebit.co.jp/english/"
            rel="noopener noreferrer"
            target="_blank"
          >
            beBit Inc.
          </a>
        </li>
        <li>
          <strong>Website:</strong>
          <a
            href="https://app.usergram.info"
            rel="noopener noreferrer"
            target="_blank"
          >
            https://app.usergram.info
          </a>
        </li>
        <li>
          <strong>Description:</strong>
          <span class="usergram__text">
            A tool to improve UX by analyzing users' behaviors.
          </span>
        </li>
        <li>
          <strong>Technologies I worked with:</strong>
          <span class="usergram__text">
            Vue2, Vuex, Vue3, Django, Cypress, Jest, Docker, AWS, Terraform,
            Sentry, Github Actions, Micro Frontends, Micro Services.
          </span>
        </li>
        <li>
          <strong>My role:</strong>
          <ul class="sub">
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
        </li>
      </ul>
    </template>
  </PortfolioTemplate>
</template>

<script setup>
import PortfolioTemplate from "./PortfolioTemplate.vue";
import usergramImage1 from "@/assets/portfolio/usergram-1.png";
import usergramImage2 from "@/assets/portfolio/usergram-2.png";
import usergramImage3 from "@/assets/portfolio/usergram-3.png";
import usergramImage4 from "@/assets/portfolio/usergram-4.png";
import usergramImage5 from "@/assets/portfolio/usergram-5.png";

const images = [
  {
    src: usergramImage1,
    isDesktop: true,
  },
  {
    src: usergramImage2,
    isDesktop: true,
  },
  {
    src: usergramImage3,
    isDesktop: true,
  },
  {
    src: usergramImage4,
    isDesktop: true,
  },
  {
    src: usergramImage5,
    isDesktop: true,
  },
];
</script>

<style scoped>
.usergram__text {
  margin-left: 0.3em;
}
</style>
