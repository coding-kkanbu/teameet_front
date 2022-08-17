import myAxios from '@/api/AxiosInstanceController'
import Urls from '@/api/urls'
import postStore from '@/store/modules/postStore'
// import store from '@/store'

export default {
  async getCategories () {
    await myAxios
      .get(Urls.category_All)
      .then(response => {
        postStore.state.categories = response.data.results
      })
      .catch(error => {
        console.log('getCategories GET error', error.response)
      })
  },

  getRecentPosts (component, category) {
    myAxios
      .get(Urls.category_RecentPosts(category.slug))
      .then(response => {
        if (category.name === '두근두근 후기') {
          component.recentPostsByCategory.unshift({
            'category': category.name,
            'posts': response.data
          })
        } else {
          component.recentPostsByCategory.push({
            'category': category.name,
            'posts': response.data
          })
        }
      })
      .catch(error => {
        console.log('getRecentPosts GET error', error.response)
      })
  },

  getAllPostsByCategory (component, category) {
    myAxios
      .get(Urls.category_AllPosts(category))
      .then(response => {
        component.category_AllPosts = response.data.post_set
      })
      .catch(error => {
        console.log('getAllPostsByCategory GET error', error.response)
      })
  },

  getPost (component, id) {
    myAxios
      .get(Urls.postUnique(id))
      .then(response => {
        component.post = response.data
        this.getPostComments(component, id)
      })
      .catch(error => {
        console.log('getPost GET error', error.response)
      })
  },

  getPostComments (component, id) {
    myAxios
      .get(Urls.uniquePost(id))
      .then(response => {
        component.comments = response.data
      })
      .catch(error => {
        console.log('getPostComments GET error', error.response)
      })
  },

  deletePost (component, id) {
    console.log('deletePost()...', id)
    myAxios
      .delete(Urls.postUnique(id))
      .then(response => {
        component.post = response.data
      })
      .catch(error => {
        console.log('deletePost DELETE error', error.response)
      })
  }
}
