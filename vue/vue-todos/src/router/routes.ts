import HomeViewVue from "@views/HomeView.vue";
import TodosView from "@views/TodosView.vue";

import type { RouteRecordRaw } from "vue-router";
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: HomeViewVue,
  },
  {
    path: "/todos",
    name: "todos",
    component: TodosView,
  },
];

export default routes;
