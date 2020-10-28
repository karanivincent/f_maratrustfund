import { createRouter, createWebHistory } from 'vue-router'
import Tenders from '../components/Tenders'
import Login from '../components/Login'
import Home from '../components/Home'
import ProjectDetails from '../components/ProjectDetails'
const routes = [
  {
    path: '/',
    name: Home,
    component: Tenders
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Tenders
  },
  {
    path: '/project/:id',
    name: 'ProjectDetails',
    component: ProjectDetails,
    props: (route) => ({
      ...route.params
    })
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
