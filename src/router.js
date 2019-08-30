import Vue from 'vue'
import Router from 'vue-router'
import list from './List/List.vue'
import post from './Post/Post.vue'
import homepage from './Homepage/Homepage.vue'
import header from './components/header.vue'
import footer from './components/footer.vue'


<<<<<<< HEAD

=======
>>>>>>> 52fae22b444004e770464b8615cde9e349d5d069
import MyCalendar from './Profile/components/MyCalendar.vue'
import pending from './Confirmation/components/pending.vue'


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
    },
    {
<<<<<<< HEAD
=======
      path: '/header',
      name: 'header',
      component: header
    },
    {
      path: '/footer',
      name: 'footer',
      component: footer
    },
    {
>>>>>>> 52fae22b444004e770464b8615cde9e349d5d069
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
export default router;

//   export default Router;
