import {createWebHistory, createRouter} from "vue-router"

import Home from "../views/home.vue"
import Checkout from "../views/checkout.vue"

const routes =[
    {
        path: '/',
        component: Home,
        name: 'Home'
    },
    {
        path: '/checkout',
        component: Checkout,
        name: 'Checkout'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router