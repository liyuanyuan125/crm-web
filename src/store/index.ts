import Vue from 'vue'
import Vuex from 'vuex'
import User, { UserState } from './modules/user'


Vue.use(Vuex)

export interface RootState {
  user: UserState
}

export default new Vuex.Store<RootState>({})
