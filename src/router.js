import Vue from 'vue'
import Router from 'vue-router'
import list from './List/List.vue'
import post from './Post/Post.vue'
import homepage from './Homepage/Homepage.vue'





Vue.use(Router)

const router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/list',
      name: 'list',
      component: list
    },
    {
      path: '/post',
      name: 'post',
      component: post
    },
    {
      path: '/homepage',
      name: 'homepage',
      component: homepage
    }
  ]
})
export default router;
