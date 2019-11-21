import store from '@/store'
import { VuexModule, Module, Action, Mutation, getModule } from 'vuex-module-decorators'

@Module({dynamic: true, store, namespaced: true, name: 'info'})
export default class Info extends VuexModule {
  // 默认头像
  defaultAvatar = 'https://aiads-file.oss-cn-beijing.aliyuncs.com/IMAGE/MISC/bn95dullns9g008006bg.png'
}

export const UserModule = getModule(Info)
