import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import store from '@/store.js';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/materias',
            name: 'materias',
            component: () => import('./views/Materias.vue')
        },
        {
            path: '/quem-somos',
            name: 'QuemSomos',
            component: () => import('./views/QuemSomosPage.vue')
        },
        {
            path: '/cadastro',
            name: 'cadastro',
            component: () => import('./views/Cadastro.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('./views/Login.vue')
        }
    ]
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.authRequired)) {
        if (!store.state.isAuthenticated) {
            next({
                path: '/cadastro'
            });
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;
