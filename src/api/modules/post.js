import myAxios from '@/api/AxiosInstanceController'
import Urls from '@/api/urls'

export default {
  getCategoryIds (component) {
    console.log('getCategoryIds()...')
    myAxios
      .get(Urls.categories)
      .then(response => {
        console.log('getCategoryIds GET response', response)
        component.categoryIds = response.data
      })
      .catch(error => {
        console.log('getCategoryIds GET error', error.response)
      })
  },

  getRecentPostsByCategory (component, slug) {
    console.log('getRecentPostsByCategory()...', slug)
    myAxios
      .get(Urls.recentPostsByCategory(slug))
      .then(response => {
        console.log('getRecentPostsByCategory GET response', response)
        component.recentPostsByCategory.push({'category': response.data.name, 'posts': response.data.post_set})
      })
      .catch(error => {
        console.log('getRecentPostsByCategory GET error', error.response)
      })
  },

  getAllPostsByCategory (component, slug) {
    console.log('getAllPostsByCategory()...', slug)
    myAxios
      .get(Urls.allPostsBycategory(slug))
      .then(response => {
        console.log('getAllPostsByCategory GET response', response)
        component.allPostsBycategory = response.data.post_set
      })
      .catch(error => {
        console.log('getAllPostsByCategory GET error', error.response)
      })
  },

  getPost (component, id) {
    console.log('getPost()...', id)
    myAxios
      .get(Urls.postUnique(id))
      .then(response => {
        console.log('getPost GET response', response)
        component.post = response.data
        this.getPostComments(component, id)
      })
      .catch(error => {
        console.log('getPost GET error', error.response)
      })
  },

  getPostComments (component, id) {
    console.log('getPostComments()...', id)
    myAxios
      .get(Urls.uniquePost(id))
      .then(response => {
        console.log('getPostComments GET response', response)
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
        console.log('deletePost DELETE response', response)
        component.post = response.data
      })
      .catch(error => {
        console.log('deletePost DELETE error', error.response)
      })
  }
}
