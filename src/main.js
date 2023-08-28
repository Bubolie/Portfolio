import "./assets/CSS/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);

app.mount("#app");

// libraire AOS pour les aniamations de défilement
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
