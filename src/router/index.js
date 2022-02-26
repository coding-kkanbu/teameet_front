import Vue from 'vue'
import Router from 'vue-router'
import MainHome from '@/components/MainHome.vue'
import Topic from '@/components/Topic.vue'
import SubTopic from '@/components/SubTopic.vue'
import PostDetail from '@/components/PostDetail.vue'
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
    { path: '/', component: MainHome },
    { path: '/pitapat', component: PitAPat },
    { path: '/topic/postdetail', component: PostDetail },
    { path: '/pitapat/postdetail', component: PitapatDetail },
    { path: '/pitapat/write', component: PitapatWrite },
    {
      path: '/topic',
      component: Topic,
      props: true,
      children: [
        { path: ':subtopic', component: SubTopic }
      ]
    },
    {
      path: '/mypage',
      component: MyPage,
      props: true,
      children: [
        { path: 'profile', component: Profile },
        { path: 'posts', component: MyPosts }
      ]
    }
  ]
})
