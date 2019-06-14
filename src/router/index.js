import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            component: () => import('../views/index.vue'),
            children: []
        },
        {
            path: '/speak',
            component: () => import('../views/home/speak/index.vue'),
            children: [
            ]
        },
        {
            path: '/speak/speakList',
            component: () => import('../views/home/speak/speakList.vue'),
            children: []
        },
        {
            path: '/speak/speakTrain',
            component: () => import('../views/home/speak/speakTrain.vue'),
            children: []
        },
        {
            path: '/word',
            component: () => import('../views/home/word/index.vue'),
            children: [
            ]
        },
        {
            path: '/word/wordTrain',
            component: () => import('../views/home/word/wordTrain.vue'),
            children: [
            ]
        }
    ],
})
export default router