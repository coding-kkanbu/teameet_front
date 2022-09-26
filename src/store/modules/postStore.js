const postStore = {
  namespaced: true,
  state: {
    categories: [],
    allPostsBycategory: [],
    totalPages: 0
  },

  mutations: {
    setCategories (state, payload) {
      state.categories = payload
    }
  }
}

export default postStore
