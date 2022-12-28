import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            redirect: 'mainpage',
            component: () => import('@/layouts/Layout'),
            children: [
                // Components
                {
                    name: 'Mainpage',
                    path: 'mainpage',
                    component: () => import('@/view_user/pages_user/Mainpage'),
                },
                {
                    name: 'UserPage',
                    path: 'user',
                    component: () => import('@/view_user/pages_user/UserPage'),
                },
                {
                    name: 'ProductList',
                    path: 'product-list',
                    component: () => import('@/view_user/pages_user/ProductList'),
                },
            ],
        },
    ],
})