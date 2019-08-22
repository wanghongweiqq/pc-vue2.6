
import ajax from '@/service/axios'
export default {
  // 获取活动列表
  getList (data) {
    return ajax({
      url: '/brilliant/common/tableList',
      method: 'get',
      data,
      showLoading: true
    })
  },
  // /搜索客户
  searchtList (data) {
    return ajax({
      url: '/brilliant/common/search',
      data,
      showLoading: true
    })
  }
}