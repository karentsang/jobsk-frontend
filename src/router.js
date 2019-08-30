import Vue from 'vue'
import Router from 'vue-router'
import MyCalendar from './Profile/components/MyCalendar.vue'
import pending from './Confirmation/components/pending.vue'


Vue.use(Router)

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