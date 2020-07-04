import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home')
  },

  {
    path: '/category',
    name: 'category',
    component: () => import('../views/Category'),
    props:route=>({...route.query}),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login'),
    props:route=>({...route.query}),
  },

  {
    path: '/businesslogin',
    name: 'businesslogin',
    component: () => import('../views/BusinessLogin'),
    props:route=>({...route.query}),
  },

  {
    path: '/mine',
    name: 'mine',
    component: () => import('../views/Mine'),
    props:route=>({...route.query}),
  },

  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register'),
  },
  {
    path: '/shopping',
    name: 'shopping',
    component: () => import('../views/Shopping'),
    props:route=>({...route.query}),
  },
  {
    path: '/businessregistercheck',
    name: 'businessregistercheck',
    component: () => import('../views/BusinessRegistercheck'),
  },
  {
    path: '/businessregister',
    name: 'businessregister',
    component: () => import('../views/Businessregister'),
  },
  {
    path: '/myshops',
    name: 'msyshops',
    component: () => import('../views/MyShops'),
  },
  {
    path: '/collection',
    name: 'collection',
    component: () => import('../views/Collection'),
  },
  {
    path: '/searchpage',
    name: 'searchpage',
    component: () => import('../views/Searchpage'),
  },
  {
    path: '/businesshome',
    name: 'businesshome',
    component: () => import('../views/BusinessHome'),
  },
  {
    path: '/addmenu',
    name: 'addmenu',
    component: () => import('../views/AddMenu'),
  },
  {
    path: '/myorder',
    name: 'myorder',
    component: () => import('../views/MyOrder'),
  },
  {
    path: '/shopsmanage',
    name: 'shopsmanage',
    component: () => import('../views/ShopsManage'),
    props:route=>({...route.query}),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
