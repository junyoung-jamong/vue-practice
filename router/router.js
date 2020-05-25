import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../src/components/HelloWorld.vue'
import SignIn from '../src/components/SignIn.vue'
import SignUp from '../src/components/SignUp.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/auth/signin',
        name: 'signin',
        component: SignIn
    },
    {
        path: '/auth/signup',
        name: 'signup',
        component: SignUp
    }
]

const router = new VueRouter({
    //mode: 'history',
    routes
});

export default router