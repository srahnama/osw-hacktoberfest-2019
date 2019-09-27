import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routerOptions = [
  { path: '/', name: 'Home', viewPath: 'Home' },
  { path: '/about', name: 'About', viewPath: 'About' },
  { path: '/generate', name: 'Generate', viewPath: 'Generate' }
]

const routes = routerOptions.map(r => {
  return {
    ...r,
    component: () => import(`@/views/${r.viewPath}/Index.vue`)
  }
})

const router = new Router({
  routes
})

export default router
