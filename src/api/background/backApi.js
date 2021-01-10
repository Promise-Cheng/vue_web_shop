import {get, post,put,delet} from "@/api/background/axios";
const backgroundBaseUrl = 'http://localhost:27012'

export const background = {
  login: (params) => post(backgroundBaseUrl+`/admin/login?userName=${params.userName}&password=${params.password}`,{}),
  getProfile: (params) => get(backgroundBaseUrl+'/admin/profile',params),
  editProfileName: (params) => post(
    backgroundBaseUrl+`/admin/profile/name` +
    `?loginUserId=${params.adminUserId}&loginUserName=${params.loginUserName}&nickName=${params.nickName}`
    , params),
  editProfilePassword: (params) => post(
    backgroundBaseUrl+`/admin/profile/password?loginUserId=${params.adminUserId}&originalPassword=${params.originalPassword}&newPassword=${params.newPassword}`
    , params),
  getCarouselList: (params) => get(backgroundBaseUrl+'/admin/get_carousels', params),
  updateCarouselList: (params) => post(backgroundBaseUrl+'/admin/carousels/update', params),
  saveCarouselList: (params) => post(backgroundBaseUrl+'/admin/carousels/save', params),
  deleteCarouselList: (params) => post(backgroundBaseUrl+'/admin/carousels/delete', params),
  getGoodsList: (params) => get(backgroundBaseUrl+'/admin/get_goods', params),
  updateGoodsList: (params) => post(backgroundBaseUrl+'/admin/goods/update', params),
  saveGoodsList: (params) => post(backgroundBaseUrl+'/admin/goods/save', params),
  editGoodsStatus: (params) => put(backgroundBaseUrl+`/admin/goods/status/${params.status}`, params.ids),
}
export const order =  {
  getOrder: (params) => get(backgroundBaseUrl+'/admin/get_orders',params),
  getOrderDetail: (params) => get(backgroundBaseUrl+`/admin/order-items/${params}`),
  updateOrder: (params) => post(backgroundBaseUrl+'/admin/orders/update',params),
  checkDoneOrder: (params) => post(backgroundBaseUrl+'/admin/orders/checkDone',params),
  checkOutOrder: (params) => post(backgroundBaseUrl+'/admin/orders/checkOut',params),
  closeOrder: (params) => post(backgroundBaseUrl+'/admin/orders/close',params),
}
