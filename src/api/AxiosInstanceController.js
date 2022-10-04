import axios from 'axios'
import Urls from '@/api/urls'
import userStore from '@/store/modules/userStore'
import accountsApi from '@/api/modules/accounts'

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
      if (error.response.status === 406) {
        if (error.response.data.messages.token_class === 'AccessToken') {
          accountsApi.refreshToken()
        } else {
          accountsApi.logout()
          console.log('토큰 만료, 재로그인 필요')
          userStore.commit('dialogOpen', 'login')
        }
      } else if (error.response.status === 400) {
        console.log('Error', error.response.data)
      } else if (error.response.status === 404) {
        console.log('Error 404', '페이지 찾을 수 없음')
      } else if (error.response.status >= 500) {
        console.log('Error 5xx', '서버 에러')
      } else {
        console.log('Error', error.response.data.detail)
      }
      // generalStore.state.dialog.error = true
      return Promise.reject(error.response)
    })

  return instance
}

const myAxios = setInterceptors(createAxiosInstance(Urls.Django_API, 1000))

export default myAxios
