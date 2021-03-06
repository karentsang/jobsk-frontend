import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import * as VueGoogleMaps from 'vue2-google-maps'
// import BootstrapVue from 'bootstrap-vue'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' 
import 'material-icons/iconfont/material-icons.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import StarRating from 'vue-star-rating';
import Datetime from 'vue-datetime';
import 'vue-datetime/dist/vue-datetime.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import VueSwal from 'vue-swal'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch,faMagic, faDollarSign, faBullhorn, faCamera, faPencilRuler, faMusic, faPalette, faChild, faGem } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

axios.defaults.baseURL = 'https://jobsk.whiteboard.academy'

Vue.use(VueAxios, axios)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDzopvRbFKftEMpP4gGb_54PfvXBKGzSqU',
    libraries: 'places', 
  },
  installComponents: true
})
// Vue.use(BootstrapVue)
Vue.use(Vuesax);
Vue.use(ElementUI)
Vue.use(Datetime)
Vue.component('star-rating', StarRating);
Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.use(VueSwal)

library.add(faSearch,faMagic, faDollarSign, faBullhorn, faCamera, faPencilRuler, faMusic, faPalette, faChild, faGem)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false




Vue.config.productionTip = false

new Vue({
  router,

  render: h => h(App),
}).$mount('#app')
