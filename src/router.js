import Vue from 'vue'
import Router from 'vue-router'
import list from './List/List.vue'
import post from './Post/Post.vue'
import homepage from './Homepage/Homepage.vue'
import login from './Account/Login.vue'
import signup from './Account/SignUp.vue'
import mypost from './Profile/components/MyPost.vue'

import mycalendar from './Profile/components/MyCalendar.vue'
import pending from './Confirmation/components/pending.vue'


Vue.use(Router)

const router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: homepage
    },
    {
      path: '/account/login',
      name: 'login',
      component: login
    },
    {
      path: '/account/login/signup',
      name: 'signup',
      component: signup
    },
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
      path: '/profile/mycalendar',
      name: 'mycalendar',
      component: mycalendar,
    },
    {
      path: '/confirmation/pending',
      name: 'pending',
      component: pending,
    },
    {
      path: '/profile/mypost',
      name: 'mypost',
      component: mypost,
    }
  ]
})
export default router;

//   export default Router;
