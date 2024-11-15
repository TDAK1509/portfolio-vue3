import { createWebHistory, createRouter } from "vue-router";

const routes = [
  { path: "/", component: () => import("./views/HomePage.vue") },
  { path: "/skills", component: () => import("./views/SkillsPage.vue") },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { router };
