const userStore = {
  namespaced: true,
  state: {
    dialog: {
      register: false,
      login: false
    },
    isLogin: false,
    user: {
      username: 'Guest'
    }
  },
  mutations: {
    dialogOpen (state, kind) {
      if (kind === 'login') {
        state.dialog.login = true
      } else if (kind === 'register') {
        state.dialog.register = true
      }
    },
    loginSuccess (state, userDetail) {
      state.isLogin = true
      state.user = userDetail
      state.dialog.login = false
    },
    logoutSuccess (state) {
      state.isLogin = false
      state.user.username = 'Guest'
    }
  }
}

export default userStore
