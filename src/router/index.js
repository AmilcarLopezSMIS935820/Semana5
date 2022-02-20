import Vue from 'vue'
import VueRouter from 'vue-router'
import longitud from '../components/longitud.vue'
import monedas from '../components/monedas.vue'
import inicio from '../components/inicio.vue'
import masa from '../components/masa.vue'
import almacenamiento from '../components/almacenamiento.vue'
import Tiempo from '../components/Tiempo.vue'




Vue.use(VueRouter)

const routes = [
  {
    path:'/inicio',
    name:'/inicio',
    component: inicio
  },

  {
    path: '/longitud',
    name: 'longitud',
    component: longitud
  },
  {
    path:'/monedas',
    name:'/monedas',
    component: monedas
  },
  {
    path:'/masa',
    name:'/masa',
    component:masa
  },
  {
    path:'/almacenamiento',
    name:'/almacenamiento',
    component: almacenamiento
  },
  {
    path:'/Tiempo',
    name:'/Tiempo',
    component: Tiempo
  }

]

const router = new VueRouter({
  routes
})

export default router
