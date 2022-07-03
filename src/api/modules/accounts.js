import myAxios from '@/api/AxiosInstanceController'
import Urls from '@/api/urls'
import userStore from '@/store/modules/userStore'
import store from '@/store'

export default {
  register (postData) {
    myAxios
      .post(Urls.accounts_Register, postData)
      .then(response => {
        store.commit('userStore/dialogOpen', 'login')
      })
      .catch(error => {
        console.log('register POST error', error.response)
      })
  },

  login (postData) {
    myAxios
      .post(Urls.accounts_Login, postData)
      .then(response => {
        localStorage.setItem('access_token', response.data['access_token'])
        localStorage.setItem('refresh_token', response.data['refresh_token'])
        this.getMyDetail()
      })
      .catch(error => {
        // if ('tokenexpired' === true) {
        //   this.refreshToken()
        // }
        console.log('Login POST error', error.response)
      })
  },

  logout () {
    myAxios
      .post(Urls.accounts_Logout)
      .then(response => {
        localStorage.removeItem('access_token')
        alert(`${userStore.state.user.username}님이 로그아웃 하셨습니다.`)
        store.commit('userStore/logoutSuccess', response.data)
      })
      .catch(error => {
        console.log('Logout GET error.response', error.response)
      })
  },

  refreshToken () {
    myAxios
      .post(Urls.accounts_TokenRefresh, {'refresh': localStorage.getItem('refresh_token')})
      .then(response => {
        localStorage.setItem('access_token', response.data['access'])
      })
      .catch(error => {
        // if ('tokenexpired' === true) {
        //   userStore.commit('dialogOpen', 'login')
        // }
        console.log('refreshToken POST error', error.response)
      })
  },

  getMyDetail () {
    myAxios
      .get(Urls.users_Me)
      .then(response => {
        store.commit('userStore/loginSuccess', response.data)
      })
      .catch(error => {
        console.log('getMyDetail GET error', error.response)
      })
  }

}
