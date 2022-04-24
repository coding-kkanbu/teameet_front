import Vue from 'vue'
import axios from 'axios'
import URL from 'api/url'

const api = axios.create({
  baseURL: URL.BaseDev
})

api.interceptors.response.use(
  function (response) {
    Vue.$log.debug(`URL Check - ${response.config.baseURL}`)

    return response
  },

  function (error) {
    if (error) {
      Vue.$log.error('!intercept error!', error)
      Vue.$log.error('status : ', error.response.status)
      Vue.$log.error('message : ', error.response.data.message)
    }

    return Promise.reject(error)
  })

export default api
