import Vue from 'vue'
import Router from 'vue-router'
import MainHome from '@/components/Common/MainHome.vue'
import Topic from '@/components/Topic/Topic.vue'
import SubTopic from '@/components/Topic/SubTopic.vue'
import PostDetail from '@/components/Topic/PostDetail.vue'
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
        { path: ':subtopic', component: SubTopic, name: 'subtopic' },
        { path: 'postdetail', component: PostDetail }
      ]
    },
    {
      path: '/pitapat',
      component: PitAPat,
      name: 'pitapat',
      children: [
        { path: 'postdetail', component: PitapatDetail },
        { path: 'write', component: PitapatWrite }
      ]
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
