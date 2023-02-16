// import '@babel/polyfill'
// import 'mutationobserver-shim'
import Vue from 'vue'
// import './plugins/bootstrap-vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'
import './plugins/base'

// Import Bootstrap and BootstrapVue CSS files (order is important)
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// // Import Bootstrap and BootstrapVue CSS files (order is important)
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.mixin({
    data: function() {
      return {
        globalOrder:[1,2]
      }
    }
  })

new Vue({
    vuetify,
    store,
    router,
    render: h => h(App)
}).$mount('#app')
