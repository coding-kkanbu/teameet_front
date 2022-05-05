import Vue from 'vue'
import axios from 'axios'
import Urls from 'api/urls'

function setInterceptors (instance) {
  instance.interceptors.request.use(
    function (config) {
      config.headers['access-token'] = localStorage.getItem('access_token')
      return config
    },
    function (error) {
      console.log(error)
      return Promise.reject(error)
    }
  )

  instance.interceptors.response.use(
    function (response) {
      Vue.$log.debug(`URL Check - ${response.config.baseURL}`)
      return response
    },
    function (error) {
      Vue.$log.error('!intercept error!', error)
      Vue.$log.error('status : ', error.response.status)
      Vue.$log.error('message : ', error.response.data.message)
      // ErrorController(error)
      return Promise.reject(error)
    })

  return instance
}

function createApiInstance () {
  const apiInstance = axios.create({
    baseURL: Urls.Django_API,
    timeout: 1000
  })
  return apiInstance
}

function createAuthApiInstance () {
  const authApiInstance = createApiInstance()
  return setInterceptors(authApiInstance)
}

const api = createApiInstance()
const authApi = createAuthApiInstance()

export { api, authApi }
