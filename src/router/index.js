import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";

import Layout from "@/components/layout/index.vue";
import NotFound from "@/pages/404/index.vue";

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
        component: () => import("@/pages/home/index.vue"),
      },
      {
        name: "About",
        path: "about",
        component: () => import("@/pages/about/index.vue"),
      },
      // 404页面路由配置
      {
        path: "/:catchAll(.*)", // 通配符路由
        name: "NotFound",
        component: NotFound,
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;