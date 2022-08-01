import HomeViewVue from "@views/HomeView.vue";
import AboutViewVue from "@views/AboutView.vue";
import type { RouteRecordRaw } from "vue-router";
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: HomeViewVue,
  },
  {
    path: "/about",
    name: "about",
    component: () => AboutViewVue,
  },
];

export default routes;
