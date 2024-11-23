import { createWebHashHistory, createRouter } from "vue-router";

const routes = [
  { path: "/", name: "home", component: () => import("./views/HomePage.vue") },
  {
    path: "/skills",
    name: "skills",
    component: () => import("./views/SkillsPage.vue"),
  },
  {
    path: "/experiences",
    name: "experiences",
    component: () => import("./views/ExperiencesPage.vue"),
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: () => import("./views/PortfolioPage.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export { router };
