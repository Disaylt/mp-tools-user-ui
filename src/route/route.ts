import { createRouter, createWebHistory } from "vue-router";
import Layout from "../components/Layout.vue";
import { useUserStore } from "../store/auth/user.store";
import Auth from "../views/auth/Auth.vue";
import Login from "../views/auth/Login.vue";
import Register from "../views/auth/Register.vue";

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
    // if(to.meta.requiresAuth){
    //     if(useUserStore().user === null){
    //         next("/auth/login")
    //     }
    //     else{
    //         next();
    //     }
    // }
    // else{
    //     next();
    // }

    next();
})

export default router;