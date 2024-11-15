import { createApp } from "vue";
import "./style.css";
import "./style.mobile.css";
import "./animation.css";
import App from "./App.vue";
import { router } from "./router";

createApp(App).use(router).mount("#app");
