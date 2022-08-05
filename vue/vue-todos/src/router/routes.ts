import HomeViewVue from "@views/HomeView.vue";
import TodosView from "@views/TodosView.vue";
import CompositionAPIViewVue from "@views/CompositionAPIView.vue";
import Section1 from "@/container/composition/Section1.vue";
import Section2 from "@/container/composition/Section2.vue";
import Section3 from "@/container/composition/Section3.vue";

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
  {
    path: "/composition",
    name: "composition",
    component: CompositionAPIViewVue,
    children: [
      { path: "1", component: Section1 },
      { path: "2", component: Section2 },
      { path: "3", component: Section3 },
    ],
  },
];

export default routes;
