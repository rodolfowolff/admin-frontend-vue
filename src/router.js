import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: "Home",
    component: () => import('./pages/Dashboard.vue')
  },
  {
    path: "/:pathMatch(.*)*",
    name: "PageNotFound",
    component: () => import("./pages/PageNotFound.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;;
