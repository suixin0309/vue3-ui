import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createRouter, createWebHashHistory } from 'vue-router';
import Xin from './components/xin.vue'
import Xin2 from './components/xin2.vue'

const history = createWebHashHistory()
const router = createRouter({
    history,
    routes: [
        {
            path: "/",
            component: Xin
        },
        {
            path: "/xxx",
            component: Xin2
        },
    ]
})

const app=createApp(App)
app.use(router)
app.mount('#app')