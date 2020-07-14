import Vue from 'vue'
import VueRouter from 'vue-router'
import RoomsTable from '@/components/RoomsTable/RoomsTable'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: RoomsTable
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
