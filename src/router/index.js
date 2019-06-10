import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            component: () => import('../views/main/index.vue'),
            children: []
        }
    ]
})

export default router