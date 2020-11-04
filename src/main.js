import Vue from 'vue'
import App from './App.vue'
import router from './routes/index.js'
import '../node_modules/bulma/css/bulma.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App), router
}).$mount('#app')
