import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import AboutMe from '@/views/AboutMe.vue'
import ResumeView from '@/views/ResumeView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import GameView from '@/views/GameView.vue'
const routes = [
    {
        path: '/aboutme',
        alias: '/',
        name: 'about me',
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
    },
    {
        path: '/game',
        name: 'game',
        component: GameView
    }
]

/*
const routes = [
    {
        path: '/aboutme',
        alias: '/',
        name: 'about me',
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
    },
    {
        path: '/snake',
        name: 'snake',
        component: () => import('@/views/SnakeView.vue')
    }
]*/

const router = new VueRouter({
  routes
})

import store from '@/store'

router.beforeEach(async (to, from, next) => {
    store.dispatch({
        type: 'updateRouteIndex',
        path: to.path
    })
    from
    next()
})

export default router
