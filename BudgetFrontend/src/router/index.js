import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import BudgetView from '../views/BudgetView.vue';
import ExchangeView from '../views/ExchangeView.vue';
import NewsView from '../views/NewsView.vue';
import ProfilView from '../views/ProfilView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/budget',
      name: 'budget',
      component: BudgetView
    },
    {
      path: '/exchange',
      name: 'exchange',
      component: ExchangeView
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView
    },
    {
      path: '/profil',
      name: 'profil',
      component: ProfilView
    },
  ]
})

export default router
