/**
 * api接口统一管理
 */
import {get, post, put, delet} from './axios'
const frontendBaseUrl = 'http://localhost:28019/api/v1'

export const index = {
  /**
   * 前台登录
   * @param params loginNames,password
   */
  login: (params) => post(frontendBaseUrl+'/user/login', params),
  logout: (params) => post(frontendBaseUrl+'/user/logout', params),
  register: (params) => post(frontendBaseUrl+'/user/register', params),
  /**
   * 获取主页信息
   */
  getHomeData: (params) => get(frontendBaseUrl+'/index-infos', params),
}
export const user = {
  getUserInfo: (params) => get(frontendBaseUrl+'/user/info', params),
  editUserInfo: (params) => put(frontendBaseUrl+'/user/info', params),
}
export const address = {
  addDefaultAddress: (params) => post(frontendBaseUrl+'/address', params),
  editDefaultAddress: (params) => put(frontendBaseUrl+'/address', params),
  getDefaultAddress: (params) => get(frontendBaseUrl+'/address/default', params),

}

export const good = {
  detail: (params) => get(frontendBaseUrl+`/goods/detail/${params.id}`),
  search: (params) => get(frontendBaseUrl+'/search', params),
  categories: () => get(frontendBaseUrl+'/categories'),
}

export const cart = {
  getData: (params) => get(frontendBaseUrl+'/shop-cart', params),
  save: (params) => post(frontendBaseUrl+'/shop-cart', params),
  delete: (id) => delet(frontendBaseUrl+'/shop-cart', id),
  edit: (params) => put(frontendBaseUrl+'/shop-cart',params),
  getDetail: (params) => get(frontendBaseUrl+'/shop-cart/settle',params)
}
export const order = {
  saveOrder: (params) => post(frontendBaseUrl+'/saveOrder', params),
  getAllOrder: (params) => get(frontendBaseUrl+'/order', params),
  getOrderDetail: (params) => get(frontendBaseUrl+`/order/${params}`),
  cancelOrder: (params) => put(frontendBaseUrl+`/order/${params}/cancel`),
  confirmOrder: (params) => put(frontendBaseUrl+`/order/${params}/finish`),
  paySuccess: (params) => get(frontendBaseUrl+`/paySuccess`,params), //payType  1支付宝支付,2.微信支付
}
