import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/Homepage.vue'
import AboutMe from '../components/AboutMe.vue'
import Resume from '../components/Resume.vue'
import ProjectsView from '../components/ProjectsView.vue'
import ContactView from '../components/ContactView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutMe },
  { path: '/resume', component: Resume },
  { path: '/projects', component: ProjectsView },
  { path: '/contact', component: ContactView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
