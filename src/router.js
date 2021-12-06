import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from './pages/Dashboard.vue';

const routerHistory = createWebHistory();

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: Dashboard
    },
    {
      path: "/:pathMatch(.*)*",
      name: "PageNotFound",
      component: () => import("./pages/PageNotFound.vue"),
    },
  ]
});

export default router;