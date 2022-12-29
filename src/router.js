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
                    name: 'menuCategory_withoutTree',
                    path: 'cafe',
                    component: () => import('@/components/userComponents/menuOthers'),
                },
                {
                    name: 'menuCategory_withoutTree',
                    path: 'tra',
                    component: () => import('@/components/userComponents/menuOthers'),
                },
                {
                    name: 'menuCategory',
                    path: 'menu',
                    component: () => import('@/components/userComponents/menuMenu'),
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
                {
                    name: 'productInStore',
                    path: 'product',
                    component: () => import('@/components/productInterface/productInStore'),
                },
                {
                    name: 'ThanhToan',
                    path: 'thanh-toan',
                    component: () => import('@/view_user/pages_user/ThanhToan'),
                },
            ],
        },
    ],
})