import myAxios from '@/api/AxiosInstanceController'
import Urls from '@/api/urls'

export default {
  login (postData) {
    console.log('login()...')
    myAxios
      .post(Urls.login, postData)
      .then(response => {
        console.log('Login POST response', response)
        localStorage.setItem('access_token', response.data.token)
        this.getMyInfo()
      })
      .catch(error => {
        console.log('Login POST error', error.response)
        if (error.response.status === 404) {
          alert('아이디 혹은 비밀번호를 다시 확인해주세요')
        }
      })
  },

  getMyInfo () {
    console.log('getMyInfo()...')
    myAxios
      .get(Urls.getMyInfo)
      .then(response => {
        console.log('getMyInfo GET response', response)
        let userInfo = response.data
        this.$store.commit('userStore/loginSuccess', userInfo)
      })
      .catch(error => {
        console.log('getMyInfo GET error', error.response)
      })
  },

  logout () {
    console.log('logout()...')
    myAxios
      .get(Urls.logout)
      .then(response => {
        console.log('Logout GET response', response)
        localStorage.removeItem('access_token')
        alert(`${this.$store.state.userStore.me.username}님이 로그아웃 하셨습니다.`)
        this.$store.commit('userStore/logoutSuccess')
      })
      .catch(error => {
        console.log('Logout GET error.response', error.response)
      })
  }

}
