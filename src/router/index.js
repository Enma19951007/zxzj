import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const whiteList = ['/', '/user/login']

const router = new Router({
    routes: [{
            path: '/',
            component: () => import('../views/index.vue'),
            children: []
        },
        {
            path: '/speak',
            component: () => import('../views/home/speak/index.vue'),
            children: []
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
            children: []
        },
        {
            path: '/word/wordTrain',
            component: () => import('../views/home/word/wordTrain.vue'),
            children: []
        },
        {
            path: '/word/wordRank',
            component: () => import('../views/home/word/wordRank.vue'),
            children: []
        },
        {
            path: '/word/wordMy',
            component: () => import('../views/home/word/wordMy.vue'),
            children: []
        },
        {
            path: '/word/wordMyWord',
            component: () => import('../views/home/word/wordMyWord.vue'),
            children: []
        },
        {
            path: '/train',
            component: () => import('../views/home/train'),
            children: []
        },
        {
            path: '/train/wordChoose',
            component: () => import('../views/home/train/wordChoose'),
            children: []
        },
        {
            path: '/train/wordLink',
            component: () => import('../views/home/train/wordLink'),
            children: []
        },
        {
            path: '/train/wordSpell',
            component: () => import('../views/home/train/wordSpell'),
            children: []
        },
        {
            path: '/user/login',
            component: () => import('../views/user/login'),
            children: []
        }
    ],
})

router.beforeEach((to, from, next) => {
    //如果有userName 就进入想进入的页面，如果没有就进行判断，如果进入白名单页面就直接进入，其他页面则直接跳转回登陆页面
    if (sessionStorage.getItem('userName')) {
        next()
    } else {
        if (whiteList.indexOf(to.path) !== -1) {
            next()
        } else {
            next({
                path: 'user/login'
            })
        }
    }
})
export default router