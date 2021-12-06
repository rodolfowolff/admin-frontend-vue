import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from './pages/Dashboard.vue';
import Users from './pages/Users.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Dashboard
    },
    {
      path: '/users',
      component: Users
    },
    {
      path: "/:pathMatch(.*)*",
      name: "PageNotFound",
      component: () => import("./pages/PageNotFound.vue"),
    },
  ]
});
