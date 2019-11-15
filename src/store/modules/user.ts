import store from '@/store'
import { VuexModule, Module, Action, Mutation, getModule } from 'vuex-module-decorators'


export interface UserState {
    token: string,
    userName: string
}
export interface LoginForm {
  username: string,
  password: string,
  check: boolean
}

// 用户类型
export interface UserInfo {
  id: number,
  name: '',
  email: '',
  tel: '',
}

// 参数一：是否使用动态加载，只有用到当前module才会加载
// 参数二：挂载store目标
// 参数三：是否开启命名空间
// 参数四：module名称
@Module({dynamic: true, store, namespaced: true, name: 'user'})
export default class User extends VuexModule {
    useItems = {}

    @Mutation
    SET_USER(items: UserInfo) {
      this.useItems = items
    }
}

export const UserModule = getModule(User)
