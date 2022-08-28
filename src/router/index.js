import Vue from 'vue'
import Router from 'vue-router'

import MainHome from '@/components/Common/MainHome.vue'
import SubTopic from '@/components/Post/SubTopic.vue'

import Topic from '@/components/Topic/Topic.vue'
import TopicDetail from '@/components/Topic/Detail.vue'
import TopicWrite from '@/components/Topic/Write.vue'

import PitAPat from '@/components/PitAPat/PitAPat.vue'
import PitapatDetail from '@/components/PitAPat/Detail.vue'
import PitapatWrite from '@/components/PitAPat/Write.vue'

import MyPage from '@/components/MyPage/MyPage.vue'
import Profile from '@/components/MyPage/Profile.vue'
import MyPosts from '@/components/MyPage/MyPosts.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: MainHome, name: 'home' },

    {
      path: '/topic',
      component: Topic,
      name: 'topic',
      props: true,
      children: [
        {
          path: ':subtopic',
          component: SubTopic,
          name: 'topicSubtopic'
        },
        {
          path: ':subtopic/:postId',
          component: TopicDetail,
          name: 'topicDetail'
        }
      ]
    },

    {
      path: '/pitapat',
      component: PitAPat,
      name: 'pitapat',
      props: true,
      children: [
        {
          path: ':subtopic',
          component: SubTopic,
          name: 'pitapatSubtopic'
        },
        {
          path: ':subtopic/:postId',
          component: PitapatDetail,
          name: 'pitapatDetail'
        }
      ]
    },

    {
      path: '/topic/write',
      component: TopicWrite,
      name: 'topicWrite'

    },
    {
      path: '/pitapat/write',
      component: PitapatWrite,
      name: 'pitapatWrite'
    },

    {
      path: '/mypage',
      component: MyPage,
      name: 'mypage',
      props: true,
      children: [
        { path: 'profile', component: Profile },
        { path: 'posts', component: MyPosts }
      ]
    }
  ]
})
