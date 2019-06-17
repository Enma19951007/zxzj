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
        },
        {
            path: '/word/wordRank',
            component: () => import('../views/home/word/wordRank.vue'),
            children: [
            ]
        },
        {
            path: '/word/wordMy',
            component: () => import('../views/home/word/wordMy.vue'),
            children: [
            ]
        },
        {
            path: '/word/wordMyWord',
            component: () => import('../views/home/word/wordMyWord.vue'),
            children: [
            ]
        },
        {
            path: '/train',
            component: () => import('../views/home/train'),
            children: [
            ]
        },
        {
            path: '/train/wordChoose',
            component: () => import('../views/home/train/wordChoose'),
            children: [
            ]
        }
    ],
})
export default router