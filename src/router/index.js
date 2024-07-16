import { createRouter, createWebHistory } from "vue-router";

import Test from "../pages/test.vue";

const routes = [
  {
    name: "Test",
    path: "/test",
    component: Test,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;