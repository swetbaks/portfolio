import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Projectsfolder from '../components/Projectsfolder.vue'
import Skills from '../components/Skills.vue'
import Contact from '../components/Contact.vue'
import Notfound from  '../components/Notfound.vue'


Vue.use(VueRouter)

const router = new VueRouter({
    mode : 'history',
    routes : [
    {path : '/', component : Home},
    {path : '*/portfolio', component : Home, redirect: '/'},
    {path : '*/projects', component : Projectsfolder},
    {path : '*/skills', component : Skills},
    {path : '*/contact', component : Contact},
    {path : '*', component : Notfound}
]})

export default router