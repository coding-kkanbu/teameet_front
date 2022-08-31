import myAxios from '@/api/AxiosInstanceController'
import Urls from '@/api/urls'
import postStore from '@/store/modules/postStore'
import router from '../../router'
// import store from '@/store'

export default {

  async getTopicCategories () {
    await myAxios
      .get(Urls.category)
      .then(response => {
        postStore.state.categories = response.data
      })
  },

  getRecentPosts (component, category) {
    myAxios
      .get(Urls.category_RecentPosts(category.slug))
      .then(response => {
        if (category.name === '두근두근 후기') {
          component.recentPostsByCategory.unshift({
            'category': category,
            'posts': response.data
          })
        } else {
          component.recentPostsByCategory.push({
            'category': category,
            'posts': response.data
          })
        }
      })
  },

  getAllPostsByCategory (category, page) {
    myAxios
      .get(Urls.category_PostsByPage(category, page))
      .then(response => {
        postStore.state.totalPages = Math.ceil(response.data.count / 10)
        postStore.state.allPostsBycategory = response.data.results
      })
  },

  getPostDetail (component, category, id) {
    myAxios
      .get(Urls.post_Detail(category, id))
      .then(response => {
        component.post = response.data
        // this.getPostComments(component, id)
      })
  },

  getPostComments (component, id) {
    myAxios
      .get(Urls.uniquePost(id))
      .then(response => {
        component.comments = response.data
      })
  },

  writePost (app, postData) {
    myAxios
      .post(Urls.post_Write(app), postData)
      .then(response => {
        router.push({
          name: app + 'Detail',
          params: { 'subtopic': response.data.category_set.slug, 'postId': response.data.id }
        })
      })
  },

  deletePost (component, id) {
    myAxios
      .delete(Urls.postUnique(id))
      .then(response => {
        component.post = response.data
      })
  },

  setPitapatConnected (component, category, id) {
    myAxios
      .patch(Urls.pitapat_Connected(id))
      .then(response => {
        this.getPostDetail(component, category, id)
      })
  }
}
