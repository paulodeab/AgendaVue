import Vue from 'vue'
import Router from 'vue-router'
import Cadastro from '../views/Cadastro.vue'
import Consulta from '../views/Consulta.vue'

Vue.use(Router)

const routes = [{
    name: 'cadastro',
    path: '/cadastro',
    component: Cadastro
},
{
    name: 'consulta',
    path: '/consulta',
    component: Consulta
},
{
    name: 'home',
    path: '/'
}
]

let router = new Router({routes})

export default router