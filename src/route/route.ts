import { createRouter, createWebHistory } from "vue-router";
import Layout from "../components/layout/Layout.vue";
import Auth from "../views/auth/Auth.vue";
import Login from "../views/auth/Login.vue";
import Register from "../views/auth/Register.vue";
import authSrvice from "../services/auth/auth.srvice";

const routes = [
    {
        path: '/panel', 
        component: Layout,
        meta: {
            requiresAuth: true
        }
    },
    {path: '/auth', component: Auth, children: 
        [
            { path: 'login', component: Login },
            { path: 'register', component: Register },
            { path: '', redirect: '/auth/login' }
        ]
    },
    { path: '/:pathMatch(.*)*', redirect: '/panel' },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, _from, next) => {
    if(to.meta.requiresAuth){
        if(authSrvice.getAccessToken() === null){
            next("/auth/login")
        }
        else{
            next();
        }
    }
    else{
        next();
    }
})

export default router;