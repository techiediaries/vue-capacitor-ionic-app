import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'

Vue.config.productionTip = false
Vue.config.ignoredElements = [/^ion-/]

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
    
  ]
})

new Vue({router,
  render: h => h(App)
}).$mount('#app')
