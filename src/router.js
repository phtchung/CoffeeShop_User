import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
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
                    name: 'user',
                    path: 'user/:name',
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
                {
                    name: 'item',
                    path: 'item/:product_name_convert',
                    component: () => import('@/components/productInterface/productInStore'),
                },
                {
                    name: 'categoryMain',
                    path: 'collections/product/:path_name',
                    component: () => import('@/components/userComponents/menuOthers'),
                },
                {
                    name: 'menuCategory_withoutTree',
                    path: '/:category',
                    component: () => import('@/components/userComponents/menuOthers'),
                },
                {
                    name: 'menu',
                    path: 'collections/menu',
                    component: () => import('@/components/userComponents/menuMenu'),
                },
                
            ],
        },
    ],
})