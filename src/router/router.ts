import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  },
  {
    path: '/habit/new',
    name: 'HabitNew',
    component: () =>
      import(/* webpackChunkName: "habit-new" */ '@/views/habit/HabitNew.vue')
  },
  {
    path: '/habit/Calendar',
    name: 'HabitCalendar',
    component: () =>
      import(
        /* webpackChunkName: "habit-calendar" */ '@/views/habit/HabitCalendar.vue'
      )
  },
  {
    path: '/habit/details/:id',
    name: 'HabitDetails',
    props: true,
    component: () =>
      import(
        /* webpackChunkName: "habit-details" */ '@/views/habit/HabitDetails.vue'
      )
  }
]

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
