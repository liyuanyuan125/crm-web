import Api from '@/utils/request'

export const getCustomList = (query: any) => {
  return Api.getCustomList(query)
}
