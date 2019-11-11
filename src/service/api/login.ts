import Api from '@/utils/request'

export const login = (query: any) => {
  return Api.login(query)
}
