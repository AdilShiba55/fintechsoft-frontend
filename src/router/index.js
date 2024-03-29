import { createRouter, createWebHistory } from 'vue-router'
import TaskView from "@/views/TaskView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/task'
    },
    {
      path: '/task',
      component: TaskView
    }
  ]
})

export default router
