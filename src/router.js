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
                    component: () => import('@/view_user/MainPage'),
                },
                {
                    name: 'user',
                    path: 'user/:name',
                    component: () => import('@/view_user/UserPage'),
                },
                {
                    name: 'ProductList',
                    path: 'product-list',
                    component: () => import('@/view_user/ProductList'),
                },
                {
                    name: 'productInStore',
                    path: 'product',
                    component: () => import('@/view_user/ProductInStore'),
                },

                {
                    name: 'ThanhToan',
                    path: 'thanh-toan',
                    component: () => import('@/view_user/ThanhToan'),
                },
                {
                    name: 'userAcount',
                    path: 'userAcount',
                    component: () => import('@/components/UserComponents/AccountUser'),
                },
                {
                    name: 'code',
                    path: 'code=:product_id',
                    component: () => import('@/view_user/ProductCode'),
                },
                {
                    name: 'item',
                    path: 'itemSale/:product_name_convert',
                    component: () => import('@/view_user/ProductInStore'),
                },
                {
                    name: 'categoryMain',
                    path: 'collections/product/:path_name',
                    component: () => import('@/components/UserComponents/MenuOthers'),
                },
                {
                    name: 'menuCategory_withoutTree',
                    path: '/:category',
                    component: () => import('@/components/UserComponents/MenuOthers'),
                },
                {
                    name: 'menuMenu',
                    path: 'collections/:category_name',
                    component: () => import('@/components/UserComponents/MenuMenu'),
                },

                
            ],
        },
    ],
})