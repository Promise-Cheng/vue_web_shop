/**
 * api接口统一管理
 */
import {get, post, put, delet} from './axios'

export const index = {
  /**
   * 前台登录
   * @param params loginNames,password
   */
  login: (params) => post('/user/login', params),
  logout: (params) => post('/user/logout', params),
  register: (params) => post('/user/register', params),
  /**
   * 获取主页信息
   */
  getHomeData: (params) => get('/index-infos', params),
}
export const user = {
  getUserInfo: (params) => get('/user/info', params),
  editUserInfo: (params) => put('/user/info', params),
}
export const address = {
  addDefaultAddress: (params) => post('/address', params),
  editDefaultAddress: (params) => put('/address', params),
  getDefaultAddress: (params) => get('/address/default', params),

}

export const good = {
  detail: (params) => get(`/goods/detail/${params.id}`),
  search: (params) => get('/search', params),
  categories: () => get('/categories'),
}

export const cart = {
  getData: (params) => get('/shop-cart', params),
  save: (params) => post('/shop-cart', params),
  delete: (id) => delet('/shop-cart', id),
  edit: (params) => put('/shop-cart',params),
  getDetail: (params) => get('/shop-cart/settle',params)
}
export const order = {
  saveOrder: (params) => post('/saveOrder', params),
  getAllOrder: (params) => get('/order', params),
  getOrderDetail: (params) => get(`/order/${params}`),
  cancelOrder: (params) => put(`/order/${params}/cancel`),
  paySuccess: (params) => get(`paySuccess`,params), //payType  1支付宝支付,2.微信支付
}


export const backgroud = {
  /**
   * 登录接口
   * @param password
   */
  login: (params) => post('/back/login', params),
}
