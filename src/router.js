import { createRouter, createWebHashHistory  } from 'vue-router'
import HomePage from './views/HomePage.vue'
import SignIn from './views/SignUp.vue'
const routes = [
    {
        path: '/',
        component: HomePage

    },
    {
        path: '/SignUp',
        component: SignIn
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router