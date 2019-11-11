import Api from '@/utils/request'

export const getData = (query: any) => {
  return Api.getData('POST', query)
}
