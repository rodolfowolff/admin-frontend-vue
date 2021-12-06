import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from './pages/Dashboard.vue';
import Users from './pages/Users.vue';
import Cep from './pages/SearchCep.vue';

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
      path: '/cep',
      component: Cep
    },
    {
      path: "/:pathMatch(.*)*",
      name: "PageNotFound",
      component: () => import("./pages/PageNotFound.vue"),
    },
  ]
});
