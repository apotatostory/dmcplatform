import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/login',
        component: () => import('../views/PageHome.vue'),
        name: 'login',
        meta: {
            title: 'login',
            hidden: true,
            icon: 'Promotion',
        },
    }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
    scrollBehavior() {
        return {
            left: 0,
            top: 0,
        }
    },
})

