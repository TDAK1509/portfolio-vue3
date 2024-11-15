import { createWebHistory, createRouter } from "vue-router";

const routes = [
  { path: "/", name: "home", component: () => import("./views/HomePage.vue") },
  {
    path: "/skills",
    name: "skills",
    component: () => import("./views/SkillsPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { router };
