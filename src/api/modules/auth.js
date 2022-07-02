import myAxios from '@/api/AxiosInstanceController'
import Urls from '@/api/urls'
import userStore from '@/store/modules/userStore'

export default {
  register (postData) {
    myAxios
      .post(Urls.auth_Register, postData)
      .then(response => {
        userStore.commit('dialogOpen', 'login')
      })
      .catch(error => {
        console.log('register POST error', error)
      })
  },

  login (postData) {
    myAxios
      .post(Urls.auth_Login, postData)
      .then(response => {
        localStorage.setItem('access_token', response.data.token)
        this.getUserDetail()
      })
      .catch(error => {
        console.log('Login POST error', error.response)
      })
  },

  getUserDetail () {
    myAxios
      .get(Urls.auth_GetUserDetail)
      .then(response => {
        userStore.commit('loginSuccess', response.data)
      })
      .catch(error => {
        console.log('getUserDetail GET error', error.response)
      })
  },

  logout () {
    myAxios
      .get(Urls.auth_Logout)
      .then(response => {
        localStorage.removeItem('access_token')
        alert(`${userStore.state.user.name}님이 로그아웃 하셨습니다.`)
        userStore.commit('logoutSuccess')
      })
      .catch(error => {
        console.log('Logout GET error.response', error.response)
      })
  }

}
