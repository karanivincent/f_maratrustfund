import { createRouter, createWebHistory } from 'vue-router'
import Tenders from '../components/Tenders'
import Login from '../components/Login'
import Home from '../components/Home'
import ProjectDetails from '../components/ProjectDetails'
import MyProjects from '../components/MyProjects'
import About from '../components/About'
import Signup from '../components/Signup'
import ResetPassword from '../components/ResetPassword'
import ChangePassword from '../components/ChangePassword'

const routes = [
  {
    path: '/',
    name: ChangePassword,
    component: ChangePassword
  },
  {
    path: '/tenders',
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
    path: '/my-projects',
    name: 'MyProjects',
    component: MyProjects
  },
  {
    path: '/project/:id',
    name: 'ProjectDetails',
    component: ProjectDetails,
    props: (route) => ({
      ...route.params
    })
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/register',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/reset-password',
    name: 'ResetPassword',
    component: ResetPassword
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
