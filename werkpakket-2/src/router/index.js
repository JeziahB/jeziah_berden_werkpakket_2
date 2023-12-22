import {createRouter, createWebHistory} from "vue-router";
import homeView from "../views/homeView.vue";
import cartView from "../views/cartView.vue";
import productView from "../views/productView.vue";
import detailView from "../views/detailView.vue";
import loginView from "../views/loginView.vue";
import checkoutView from "../views/checkoutView.vue";
import bevestigingView from "../views/bevestigingView.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: homeView
        },
        {
            path: '/home',
            component: homeView
        },
        {
            path: '/cart',
            component: cartView
        },

        {
            path: '/product',
            component: productView
        },
        {
            path: '/product/:cardId',
            name: 'product-detail',
            component: detailView,
            props: true
        },
        {
          path: '/login',
          component: loginView
        },
        {
          path: '/checkout' ,
            component: checkoutView
        },
        {
          path: '/bevestiging',
            component: bevestigingView
        },
        {
            // path: '/product/:price',
            // name: "productPrice",
            // component: productView
        },
    ]
})
export default router