import { createRouter, createWebHistory } from "vue-router";
import home from "../views/home.vue";
import notFound from "../views/notFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "accueil",
      component: home,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notFound",
      component: notFound,
    },
  ],
});

export default router;
