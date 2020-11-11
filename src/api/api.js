/**
 * api接口统一管理
 */
import {get, post} from './axios'

export const index = {
  /**
   * 前台登录
   * @param params loginNames,password
   */
  login: (params) => post('/api/v1/user/login', params),
  getUser: (params) => get('/api/v1/user/info', params),
  register: (params) => post("/api/v1/user/register", params),
  getHomeData: (params) => get('/home', params),
}

export const good = {
  detail: (params) => get('/home', params),
}

export const cart = {
  save: (params) => post('#',params),
}

export const backgroud = {
  /**
   * 登录接口
   * @param password
   */
  login: (params) => post('/back/login',params),
}