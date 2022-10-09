import Vue from 'vue'
import Router from 'vue-router'

import MainHome from '@/components/Common/MainHome.vue'
import Social from '@/components/Common/Social.vue'

import SubTopic from '@/components/Post/SubTopic.vue'
import PostDetail from '@/components/Post/Detail.vue'
import PostWrite from '@/components/Post/Write.vue'

import Topic from '@/components/Topic/Topic.vue'

import PitAPat from '@/components/PitAPat/PitAPat.vue'

import MyPage from '@/components/MyPage/MyPage.vue'
import Profile from '@/components/MyPage/Profile.vue'
import MyPosts from '@/components/MyPage/MyPosts.vue'
import Notifications from '@/components/MyPage/Notifications.vue'

import NotFound from '@/components/Error/NotFound.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: MainHome, name: 'home' },

    {
      path: '*',
      redirect: '/404'
    },

    {
      path: '/404',
      name: 'notFound',
      component: NotFound
    },
    
    {
      path: '/social',
      component: Social,
      children: [
        {
          path: ':site',
          component: Social
        }
      ]
    },

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
      component: PostWrite,
      name: 'topicWrite'

    },
    {
      path: '/write/pitapat',
      component: PostWrite,
      name: 'pitapatWrite'
    },

    {
      path: '/mypage',
      component: MyPage,
      name: 'mypage',
      props: true,
      children: [
        { path: 'profile', component: Profile },
        { path: 'posts', component: MyPosts },
        { path: 'notifications', component: Notifications }
      ]
    }

  ]
})
