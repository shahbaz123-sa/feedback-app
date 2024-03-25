import 'bootstrap/dist/css/bootstrap.css';
require('./bootstrap');
window.Vue = require('vue').default;

import Vue from 'vue';

import Home from './components/Feedbacks.vue';
import Login from './components/login_page.vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Multiselect from 'vue-multiselect';
Vue.component('Multiselect', Multiselect);

import Pagination from 'laravel-vue-pagination';
Vue.component('pagination', Pagination);

const router = new VueRouter({
routes: [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: { requiresAuth: true }
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    ]
});

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('accessToken');
    if (to.matched.some(record => record.meta.requiresAuth) && !token) {
    // if (!token) {
        next('/login');
    } else {
        if (token) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
        }
        next();
    }
});
// export default router;

new Vue({
    el: '#app',
    router
});
