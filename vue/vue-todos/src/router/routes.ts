import HomeViewVue from "@views/HomeView.vue";
import TodosView from "@views/TodosView.vue";
import CompositionAPIViewVue from "@views/CompositionAPIView.vue";
import CompositionRenderVue from "@/container/composition/compositionRender.vue";

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
    children: [{ path: "1", component: CompositionRenderVue }],
  },
];

export default routes;
