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

  getRecentPostsByCategory (component, categoryId) {
    console.log('getRecentPostsByCategory()...')
    myAxios
      .get(Urls.recentPostsByCategory(categoryId))
      .then(response => {
        console.log('getRecentPostsByCategory GET response', response)
        component.recentPostsByCategory.push({'category': response.data.name, 'posts': response.data.post_set})
      })
      .catch(error => {
        console.log('getRecentPostsByCategory GET error', error.response)
      })
  }
}
