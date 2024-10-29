<template>
  <section class="section">
    <SectionTitle>
      <template #title>What I can do for you</template>
    </SectionTitle>

    <div class="card animation-slide-in">
      <img class="card-image" src="@/assets/architecture.svg" />
      <h5>Lead engineer</h5>
      <ul class="ul disc">
        <li class="li">Decide architecture</li>
        <li class="li">Create automated testing systems</li>
        <li class="li">Create deployment workflows</li>
        <li class="li">Create ways for team to work together efficiently</li>
        <li class="li">Mentorship, onboarding and training</li>
        <li class="li">
          Review team members' works with constructive feedbacks
        </li>
        <li class="li">Project management, documenting</li>
        <li class="li">
          Active communication with all related departments and people.
        </li>
      </ul>
    </div>

    <div class="card animation-slide-in">
      <img class="card-image" src="@/assets/code.svg" />
      <h5>Senior frontend development</h5>
      <ul class="ul disc">
        <li class="li">Create automated testing systems</li>
        <li class="li">Create CIs system</li>
        <li class="li">Configure Git repository to be easily used by others</li>
        <li class="li">Documenting</li>
        <li class="li">Mentorship, onboarding and training</li>
        <li class="li">Have a deep understanding about the project</li>
        <li class="li">Solve complex problems</li>
        <li class="li">Communication with team members and other teams.</li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import SectionTitle from "@/components/SectionTitle.vue";
import { useIntersectionObserver } from "@/composables/useIntersectionObserver";

const animationClassName = "card";
useIntersectionObserver(animationClassName);
</script>

<style scoped>
.section {
  text-align: center;
  padding: 0 1em;
}
.card {
  width: 100%;
  padding: 1em 1.5em;
  border-radius: 12px;
  border: 2px solid black;
  margin-bottom: 1em;
}
.card-image {
  width: 30px;
  height: 30px;
}
.ul {
  margin-top: 1em;
}
@media only screen and (max-width: 600px) {
  .li {
    font-size: 0.8rem;
  }
}
</style>
