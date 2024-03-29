import Vue from 'vue'
import Vuex from 'vuex'
import userStore from './modules/userStore'
import postStore from './modules/postStore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    userStore,
    postStore
  }
})
