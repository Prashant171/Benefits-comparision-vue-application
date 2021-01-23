import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import companydetails from '../components/Companydetails.vue'
import competitors from '../components/Competitors.vue'
import companyform from '../components/Companyform.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/companydetails',
    name: 'companydetails',
    component: companydetails,
    props:true
  },
  {
    path: '/competitors',
    name: 'competitors',
    component: competitors,
    props:true
  },
  {
    path: '/companyform',
    name: 'companyform',
    component: companyform
  }
]

const router = new VueRouter({
  routes
})

export default router
