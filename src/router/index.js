import Vue from 'vue'
import Router from 'vue-router'

import MainHome from '@/components/Common/MainHome.vue'
import SubTopic from '@/components/Post/SubTopic.vue'
import PostDetail from '@/components/Post/Detail.vue'

import Topic from '@/components/Topic/Topic.vue'
import TopicWrite from '@/components/Topic/Write.vue'

import PitAPat from '@/components/PitAPat/PitAPat.vue'
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
          component: PostDetail,
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
          component: PostDetail,
          name: 'pitapatDetail'
        }
      ]
    },

    {
      path: '/write/topic',
      component: TopicWrite,
      name: 'topicWrite'

    },
    {
      path: '/write/pitapat',
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
