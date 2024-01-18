import './assets/main1.css'
import {createRouter, createWebHistory} from 'vue-router'

import { createApp } from 'vue'
import {createStore} from 'vuex'
 import App from './App.vue'
import HelloWorld1 from './components/HelloWorld1.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {path: '/home', component:Home},
        {path: '/about', component:About},
        {path: '/test',component:HelloWorld1}
    ]
})

const store = createStore({
    state(){
        return{
            count:0
        }
    },
    mutations:{
        increment(state){
            state.count++
        }
    }
})



const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
