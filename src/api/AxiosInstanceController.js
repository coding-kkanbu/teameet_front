// import Vue from 'vue'
import axios from 'axios'
import Urls from '@/api/urls'

function createAxiosInstance (baseUrl, timeOut) {
  const axiosInstance = axios.create({
    baseURL: baseUrl,
    timeout: timeOut
  })
  return axiosInstance
}

function setInterceptors (instance) {
  instance.interceptors.request.use(
    function (config) {
      const accessToken = localStorage.getItem('access_token')
      if (accessToken) {
        config.headers['Authorization'] = `Bearer ${accessToken}`
      }
      return config
    },
    function (error) {
      return Promise.reject(error)
    }
  )

  instance.interceptors.response.use(
    function (response) {
      return response
    },
    function (error) {
      if (error.response.status === 404) {
        // generalStore.state.errorMsg = '잘못된 요청입니다😱'
      } else if (error.response.status >= 500) {
        // generalStore.state.errorMsg = '문제가 생겼습니다😱 잠시 후에 다시 이용해 주세요.'
      } else {
        // generalStore.state.errorMsg = error.response.data.detail
      }
      // generalStore.state.dialog.error = true

      console.log('Error', error.response)
      console.log('Error', error.response.data.detail)

      // Vue.$log.error('!intercept error!', error)
      // Vue.$log.error('status : ', error.response.status)
      // Vue.$log.error('message : ', error.response.data.message)
      return Promise.reject(error.response)
    })

  return instance
}

const myAxios = setInterceptors(createAxiosInstance(Urls.Django_API, 1000))

export default myAxios
