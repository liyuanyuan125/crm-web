import store from '@/store'
import { VuexModule, Module, Action, Mutation, getModule } from 'vuex-module-decorators'

export interface BarState {
  barIndex: number
}
@Module({dynamic: true, store, namespaced: true, name: 'tabbar'})
export default class TabBar extends VuexModule {
    barIndex = 0

    @Action
    public async setBar(barIndex: number) {
        this.SET_BAR_INDEX(barIndex)
    }

    @Mutation
    private SET_BAR_INDEX(barIndex: number) {
      this.barIndex = barIndex
    }

}

export const BarModule = getModule(TabBar)
