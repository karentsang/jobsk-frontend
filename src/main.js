import Vue from 'vue'
import App from './App.vue'
import router from './router'


import Vuesax from 'vuesax'

import 'vuesax/dist/vuesax.css' //Vuesax styles
Vue.use(Vuesax)

import StarRating from 'vue-star-rating'
import Datetime from 'vue-datetime'
import 'vue-datetime/dist/vue-datetime.css'

Vue.use(Datetime)

//import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
//import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';

import 'material-icons/iconfont/material-icons.css';



//Vue.component('VueCtkDateTimePicker', VueCtkDateTimePicker);
Vue.component('star-rating', StarRating);



Vue.config.productionTip = false

new Vue({
  router,

  render: h => h(App),
}).$mount('#app')
