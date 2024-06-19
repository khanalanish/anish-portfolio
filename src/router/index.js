import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/Homepage.vue'
import AboutView from '../components/AboutView.vue'
import ProjectsView from '../components/ProjectsView.vue'
import ContactView from '../components/ContactView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/projects', component: ProjectsView },
  { path: '/contact', component: ContactView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
