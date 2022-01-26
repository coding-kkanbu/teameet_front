import Vue from 'vue'
import Router from 'vue-router'
import MainHome from '@/components/MainHome.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: MainHome }
  ]
})
