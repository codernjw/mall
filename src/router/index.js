import { createRouter, createWebHistory } from 'vue-router'


const routes = [{
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/home/home.vue')
    },
    {
        path: '/category',
        name: 'category',
        component: () =>
            import ('../views/category/category.vue')
    },
    {
        path: '/shopcart',
        name: 'shopcart',
        component: () =>
            import ('../views/shopcart/shopcart.vue')
    },
    {
        path: '/porfile',
        name: 'porfile',
        component: () =>
            import ('../views/porfile/porfile.vue')
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router