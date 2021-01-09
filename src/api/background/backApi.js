import {get, post} from "@/api/background/axios";
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
}
