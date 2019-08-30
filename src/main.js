import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import * as VueGoogleMaps from 'vue2-google-maps'
import BootstrapVue from 'bootstrap-vue'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' 
import 'material-icons/iconfont/material-icons.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';



Vue.use(VueAxios, axios)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDzopvRbFKftEMpP4gGb_54PfvXBKGzSqU',
    libraries: 'places', 
  },
  installComponents: true
})
Vue.use(BootstrapVue)
Vue.use(Vuesax);
Vue.use(ElementUI)


Vue.config.productionTip = false

new Vue({
  router,

  render: h => h(App),
}).$mount('#app')
