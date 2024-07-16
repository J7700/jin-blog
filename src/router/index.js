import { createRouter, createWebHistory } from "vue-router";

import Layout from "../components/layout/index.vue";

const routes = [
  {
    name: "Layout",
    path: "/",
    component: Layout,
    redirect: "/Home",
    children: [
      {
        name: "Home",
        path: "home",
        component: () => import("../pages/home.vue"),
      },
      {
        name: "Test",
        path: "test",
        component: () => import("../pages/test.vue"),
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;