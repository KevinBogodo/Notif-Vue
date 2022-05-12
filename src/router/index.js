import { createRouter, createWebHashHistory } from "vue-router";

import Login from '/src/views/Login.vue'
import Home from '/src/views/Home.vue'
import NotFound from '/src/views/NotFound.vue'


const routes= [

    {
        name: 'Login',
        path: '/',
        component: Login,
        meta: {
            title: 'Login',
        }
    },
    {
        name: 'Home',
        path:'/home',
        component: Home,
        meta: {
            title: 'Acceuil',
            header: 1,
        }
    },
    {
        name: 'NotFound',
        path: '/:pathMatch(.*)',
        component: NotFound,
        meta: {
            title: '404 Not Found',
        }
    },

];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.afterEach((to, from) =>{
    document.title = to.meta.title;
})

export default router;