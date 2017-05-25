// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Home from './components/Hello.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import StoriesPage from './components/StoriesPage.vue'
import Stories from './components/Stories.vue'
import Famous from './components/Famous.vue'

Vue.use(VueRouter)

const Foo = { template: '<div></div>' }

const routes = [{
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/stories',
        component: StoriesPage,
        children: [{
                path: '',
                name: 'stories.all',
                component: Stories
            },
            {
                path: 'famous',
                name: 'stories.famous',
                component: Famous
            }
        ]
    }
]

Vue.config.productionTip = false

/* eslint-disable no-new */
const router = new VueRouter({
    mode: 'history',
    base: '/',
    linkActiveClass: 'molly-active-class',
    routes // （缩写）相当于 routes: routes
})

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})