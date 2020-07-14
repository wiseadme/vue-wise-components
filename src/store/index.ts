import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { RootState } from '@/interfaces'
import { data } from './modules/data'

Vue.use(Vuex)

const store: StoreOptions<RootState> = {
  state: {
    author: 'Allakhverdiev Anar'
  },

  modules: {
    data
  }
}

export default new Vuex.Store<RootState>(store)
