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

  getRecentPostsByCategory (component, categoryName) {
    console.log('getRecentPostsByCategory()...', categoryName)
    myAxios
      .get(Urls.recentPostsByCategory(categoryName))
      .then(response => {
        console.log('getRecentPostsByCategory GET response', response)
        component.recentPostsByCategory.push({'category': response.data.name, 'posts': response.data.post_set})
      })
      .catch(error => {
        console.log('getRecentPostsByCategory GET error', error.response)
      })
  },

  getAllPostsByCategory (component, categoryName) {
    console.log('getAllPostsByCategory()...', categoryName)
    myAxios
      .get(Urls.allPostsBycategory(categoryName))
      .then(response => {
        console.log('getAllPostsByCategory GET response', response)
        component.allPostsBycategory = response.data.post_set
      })
      .catch(error => {
        console.log('getAllPostsByCategory GET error', error.response)
      })
  }
}
