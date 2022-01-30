import Vue from 'vue'
import Router from 'vue-router'
import MainHome from '@/components/MainHome.vue'
import Topic from '@/components/Topic.vue'
import SubTopic from '@/components/SubTopic.vue'
import PitAPat from '@/components/PitAPat.vue'
import PostDetail from '@/components/PostDetail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: MainHome },
    { path: '/pitapat', component: PitAPat },
    { path: '/topic/postdetail', component: PostDetail },
    {
      path: '/topic',
      component: Topic,
      props: true,
      children: [
        { path: ':subtopic', component: SubTopic }
      ]
    }
  ]
})
