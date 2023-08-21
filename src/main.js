import "./assets/CSS/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const app = createApp(App);

app.use(router);

app.mount("#app");

// libraire AOS pour les aniamations de défilement

AOS.init();

// Création d'une animation au defilement
// const shouldAnimate = document.querySelectorAll('.animate');

// function elementVisible(elem) {
//   let rect = elem.getBoundingClientRect();
//   return rect.top >= 0 && rect.bottom <= window.innerHeight;
// }
// function animationPlay() {
//   shouldAnimate.forEach((element) => {
//       if (elementVisible(element)) {
//         element.classList.add("fade-down", "fade-right");
//         console.log("L'élément est visible :", element);
//       } else {
//         console.log("L'élément n'est pas visible :", element);

//       }
//     });
//   }
// window.addEventListener("scroll", animationPlay);

