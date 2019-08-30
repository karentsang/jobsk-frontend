import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import list from './List/List.vue'
import post from './Post/Post.vue'
import homepage from './Homepage/Homepage.vue'



=======
import MyCalendar from './Profile/components/MyCalendar.vue'
import pending from './Confirmation/components/pending.vue'
>>>>>>> bookingf


Vue.use(Router)

<<<<<<< HEAD
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

=======
export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
      {
        path: '/profile/mycalendar',
        name: 'mycalendar',
        component: MyCalendar,
      },
      {
        path: '/confirmation/pending',
        name: 'pending',
        component: pending,
      }
    ]
  })

//   export default Router;
>>>>>>> bookingf
