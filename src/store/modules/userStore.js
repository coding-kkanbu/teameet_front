const userStore = {
  state: {
    dialog: {
      register: false,
      login: false
    },
    isLogin: false,
    user: {
      name: 'Guest'
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
      // state.user.name = userDetail.name
      state.user.name = 'sz'
      state.dialog.login = false
    },
    logoutSuccess (state) {
      state.isLogin = false
      state.user.name = 'Guest'
    }
  }
}

export default userStore
