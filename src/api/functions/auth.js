import { api, authApi } from '../ApiController'
import Urls from 'api/urls'

export default {
  login (postData) {
    console.log('login()...')
    api
      .post(Urls.login, postData)
      .then(res => {
        console.log('Login POST res', res)
        let token = res.data.token
        localStorage.setItem('access_token', token)
        this.getUserInfo()
      })
      .catch(err => {
        console.log('Login1 POST err', err.response)
        if (err.response.status === 404) {
          alert('아이디 혹은 비밀번호를 다시 확인해주세요')
        } else {
          alert('login NOK')
        }
      })
  },

  getUserInfo () {
    console.log('getUserInfo()...')
    authApi
      .get(Urls.getUserInfo)
      .then(response => {
        console.log('Login2 GET res', response)
        let userInfo = response.data
        this.$store.commit('userStore/loginSuccess', userInfo)
      })
      .catch(error => {
        console.log('Login2 GET err', error.response)
        alert('login NOK')
      })
  },

  logout () {
    console.log('logout()...')
    authApi
      .get(Urls.logout)
      .then(res => {
        console.log('Logout GET res', res)
        localStorage.removeItem('access_token')
        alert(`${this.$store.state.userStore.me.username}님이 로그아웃 하셨습니다.`)
        this.$store.commit('userStore/logoutSuccess')
      })
      .catch(err => {
        console.log('Logout GET err.response', err.response)
        alert('logout NOK')
      })
  }

}
