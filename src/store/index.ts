import Vue from 'vue'
import Vuex from 'vuex'
import { UserState } from './modules/user'
import { BarState } from './modules/bar'


Vue.use(Vuex)

export interface RootState {
  user: UserState,
  bar: BarState
}

export default new Vuex.Store<RootState>({})
