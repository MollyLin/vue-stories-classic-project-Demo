// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Animate from 'animate.css'
import Home from './components/Hello.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import StoriesPage from './components/StoriesPage.vue'
import Stories from './components/Stories.vue'
import Famous from './components/Famous.vue'
import StoriesEdit from './components/StoriesEdit.vue'

Vue.use(VueRouter)
Vue.use(Animate)

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
                alias: '/famous',
                component: Famous
            },
            {
                path: ':id/edit',
                props: (route) => ({ id: Number(route.params.id) }),
                name: 'stories.edit',
                component: StoriesEdit
            }
        ]
    }
]

// Vue.config.productionTip = false

/* eslint-disable no-new */
const router = new VueRouter({
    mode: 'history',
    base: '/',
    linkActiveClass: 'molly-active-class',
    routes // （缩写）相当于 routes: routes
})

// user permission check
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})

let User = {
    isAdmin: false
}
router.beforeEach((to, from, next) => {
    if (to.path !== '/login' && !User.isAdmin) {
        next('/login')
    } else {
        next()
    }
})