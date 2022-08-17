const postStore = {
  namespaced: true,
  state: {
    categories: []
  },

  mutations: {
    setCategories (state, payload) {
      state.categories = payload
    }
  }
}

export default postStore
