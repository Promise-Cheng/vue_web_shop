/**
 * api接口统一管理
 */
import {get, post} from './axios'

export const index = {
  /**
   * 前台登录
   * @param params loginNames,password
   */
  login: (params) => post('/user/login', params),
  logout: (params) => post('/user/logout', params),
  /**
   * 获取主页信息
   */
  getHomeData: (params) => get('/index-infos', params),
}
export const user = {
  getUserInfo: (params) => get('/user/info', params),
}
export const good = {
  detail: (params) => get(`/goods/detail/${params.id}`),
  search: (params) => get('/search',params),
}

export const cart = {
  getData: (params) => get('/shop-cart',params),
}

export const backgroud = {
  /**
   * 登录接口
   * @param password
   */
  login: (params) => post('/back/login',params),
}