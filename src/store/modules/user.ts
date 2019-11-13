import store from '@/store'
import { VuexModule, Module, Action, Mutation, getModule } from 'vuex-module-decorators'
import { login } from '@/service/api/login'

export interface UserState {
    token: string,
    userName: string

}

// 参数一：是否使用动态加载，只有用到当前module才会加载
// 参数二：挂载store目标
// 参数三：是否开启命名空间
// 参数四：module名称
@Module({dynamic: true, store, namespaced: true, name: 'user'})
export default class User extends VuexModule {
    token = ''
    userName = ''

    @Action
    public async Login(userInfo: { username: string, password: string}) {
        let { username, password } = userInfo
        username = username.trim()
        const data = await login({ username, password })
        localStorage.setItem('accesstoken', data.data.token)
        this.SET_TOKEN(data.token)
        this.SET_NAME(data.username)
    }

    @Mutation
    private SET_TOKEN(token: string) {
      this.token = token
    }

    @Mutation
    private SET_NAME(userName: string) {
      this.userName = userName
    }

}

export const UserModule = getModule(User)
