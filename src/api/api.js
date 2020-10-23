/**
 * api接口统一管理
 */
import {get, post} from './axios'

export const index = {
  login: (params) => post('/login', params),
  register: (params) => post("/register", params),
  getHomeData: (params) => get('/home', params),
}

export const good = {
  detail: (params) => get('/home', params),
}

export const cart = {
  save: (params) => post('#',params),
}