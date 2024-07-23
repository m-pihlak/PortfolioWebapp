import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'aboutme',
        component: () => import('@/views/AboutMe.vue')
    },
    {
        path: '/resume',
        name: 'resume',
        component: () => import('@/views/ResumeView.vue')
    },
    {
        path: '/projects',
        name: 'projects',
        component: () => import('@/views/ProjectsView.vue')
    }
]

const router = new VueRouter({
  routes
})

export default router
