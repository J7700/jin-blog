import { createRouter, createWebHistory } from "vue-router";

import Layout from "../components/layout/index.vue";

const routes = [
  {
    name: "Layout",
    path: "/",
    component: Layout,
    redirect: "/home",
    children: [
      {
        name: "Home",
        path: "home",
        component: () => import("../pages/home.vue"),
      },
      {
        name: "About",
        path: "about",
        component: () => import("../pages/about/index.vue"),
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;