import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'


Vue.use(VueRouter)

const routes = [
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  },
  {
    path: '/',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import(/* webpackChunkName: "about" */ '../views/Admin.vue'),
    meta: {requireAuth:true}
  },
  {
    path: '/manager',
    name: 'Manager',
    component: () => import(/* webpackChunkName: "about" */ '../views/Manager.vue'),
    meta: {requireAuth:true}
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  const rutaProtegida = to.matched.some(record=> record.meta.requireAuth);
  if(rutaProtegida && store.state.token === ''){
    // console.log(store.state.token);
    next({name: 'Login'})

  }else{
    next()
  }
})

export default router
