import { createMemoryHistory, createRouter } from "vue-router";

const routes = [{ path: "/", component: () => import("./views/HomePage.vue") }];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export { router };
