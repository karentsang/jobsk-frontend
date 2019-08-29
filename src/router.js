import Vue from 'vue'
import Router from 'vue-router'
import list from './List/List.vue'






Vue.use(Router)

const router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/list',
      name: 'list',
      component: list
    }
  ]
})
export default router;

