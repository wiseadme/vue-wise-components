import Vue from 'vue'
import App from './App'
import baseComponents from '@/services/baseComponents'

Vue.use(baseComponents)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
