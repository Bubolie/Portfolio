import "./assets/CSS/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";


import AOS from "aos"; // Librairie pour les animations
import "aos/dist/aos.css";


const app = createApp(App);

app.use(router);

app.mount("#app");

AOS.init();


