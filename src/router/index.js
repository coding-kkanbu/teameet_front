import Vue from 'vue'
import Router from 'vue-router'
import MainHome from '@/components/MainHome.vue'
import Topic from '@/components/Topic.vue'
import AfterPitapat from '@/components/Topic/AfterPitapat.vue'
import Health from '@/components/Topic/Health.vue'
import Invest from '@/components/Topic/Invest.vue'
import Ssum from '@/components/Topic/Ssum.vue'
import Travel from '@/components/Topic/Travel.vue'
import PitAPat from '@/components/PitAPat.vue'
import PostDetail from '@/components/PostDetail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: MainHome },
    { path: '/topic', component: Topic },
    { path: '/pitapat', component: PitAPat },
    { path: '/topic/postdetail', component: PostDetail },

    {
      path: '/topic',
      component: Topic,
      props: true,
      children: [
        { path: 'afterpitapat', component: AfterPitapat },
        { path: 'health', component: Health },
        { path: 'invest', component: Invest },
        { path: 'ssum', component: Ssum },
        { path: 'travel', component: Travel }
      ]
    }
  ]
})
