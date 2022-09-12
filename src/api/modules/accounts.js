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
  },

  login (postData) {
    myAxios
      .post(Urls.accounts_Login, postData)
      .then(response => {
        localStorage.setItem('access_token', response.data['access_token'])
        localStorage.setItem('refresh_token', response.data['refresh_token'])
        this.getMyDetail()
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
  },

  refreshToken () {
    myAxios
      .post(Urls.accounts_TokenRefresh, {'refresh': localStorage.getItem('refresh_token')})
      .then(response => {
        localStorage.setItem('access_token', response.data['access'])
      })
  },

  async getMyDetail () {
    await myAxios
      .get(Urls.users_Me)
      .then(response => {
        store.commit('userStore/loginSuccess', response.data)
      })
  },

  deleteUser () {
    myAxios
      .delete(Urls.users_Specific(userStore.state.user.username))
      .then(response => {
        console.log(response)
      })
  },

  updateMyInfo (postData) {
    myAxios
      .patch(Urls.users_Specific(userStore.state.user.username), postData)
      .then(response => {
        this.getMyDetail()
      })
  },

  uploadProfileImage (component, postData) {
    myAxios
      .patch(Urls.users_Specific(userStore.state.user.username), postData)
      .then(response => {
        this.getMyDetail()
        component.dialog.image = false
      })
  },

  verifyEmail (component, email) {
    myAxios
      .post(Urls.accounts_EmailVerification, email)
      .then(response => {
        console.log(response)
        component.$refs.form.reset()
        component.dialog.email = false
      })
  },

  resetPassword (component, email) {
    myAxios
      .post(Urls.accounts_PasswordReset, email)
      .then(response => {
        component.$refs.form.reset()
        component.dialog.email = false
      })
  },

  changePassword (component, postData) {
    myAxios
      .post(Urls.accounts_PasswordChange, postData)
      .then(response => {
        component.$refs.form.reset()
        component.dialog.password = false
      })
  }

}
