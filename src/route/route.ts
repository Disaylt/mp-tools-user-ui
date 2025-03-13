import { createRouter, createWebHistory } from "vue-router";
import Layout from "../components/Layout.vue";

const routes = [
    {
        path: '/panel', 
        component: Layout,
        children: [

        ],
        meta: {
            requiresAuth: true
        }
    },
    { path: '/:pathMatch(.*)*', redirect: '/panel' },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;