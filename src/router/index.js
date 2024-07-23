import Vue from 'vue'
import VueRouter from 'vue-router'

import AboutMe from '@/views/AboutMe.vue'
import ResumeView from '@/views/ResumeView.vue'
import ProjectsView from '@/views/ProjectsView.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        alias: '/aboutme',
        name: 'aboutme',
        component: AboutMe
    },
    {
        path: '/resume',
        name: 'resume',
        component: ResumeView
    },
    {
        path: '/projects',
        name: 'projects',
        component: ProjectsView
    }
]

const router = new VueRouter({
  routes
})

export default router
