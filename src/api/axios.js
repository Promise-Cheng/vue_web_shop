//https://blog.csdn.net/weixin_33721344/article/details/87987965

import axios from 'axios'
import QS from 'qs'// 引入qs模块，用来序列化post类型的数据
import * as tips from '@/helper/Tips'
import router from '../router'

// 环境的切换  设置axios的默认请求地址
// 通过node的环境变量来匹配我们的默认的接口url前缀
axios.defaults.baseURL = 'http://localhost:28019/api/v1';
// axios.defaults.baseURL = 'http://192.168.1.174:28019';//蔡乐圆
// axios.defaults.withCredentials = true;
// axios.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.withCredentials = true
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers.common['token'] = localStorage.getItem('token') || ''
axios.defaults.headers.post['Content-Type'] = 'application/json'
//设置请求超时
axios.defaults.timeout = 10000;

axios.interceptors.request.use((config) => {
  if (['/user/login', '/user/register'].indexOf(config.url) === -1) {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.common['token'] = token
    }
  }
  return config
})
/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export const post = (url, params) => {
  return new Promise((resolve, reject) => {
    axios //QS.stringify(params)关于这个函数会输出什么结果大家可以自行尝试一下，结果会让你惊喜，也可以自己单独传一个对象进去测试一下
      .post(url, JSON.stringify(params))
      .then(res => {
        if (typeof res.data !== 'object') {
          tips.notice2('警告', '服务端异常！', "warning")
          return Promise.reject(res)
        }
        if (res.data.resultCode != 200) {
          if (res.data.message) tips.notice2('警告', res.data.message, "warning")
          if (res.data.resultCode == 416) {
            router.push({path: '/'})
          }
          return Promise.reject(res.data)
        }
        resolve(res.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export function getPostParams(params) {
  let keyArr = Object.keys(params[0]);
  let urlSearchParams = new URLSearchParams();
  _.forEach(keyArr, item => {
    urlSearchParams.append(item, params[0][item]);
  })
  return urlSearchParams;
}

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export const get = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    }).then(res => {
      if (typeof res.data !== 'object') {
        tips.notice2('警告', '服务端异常！', "warning")
        return Promise.reject(res)
      }
      if (res.data.resultCode != 200) {
        if (res.data.message) tips.notice2('警告', res.data.message, "warning")
        if (res.data.resultCode == 416) {
          router.push({path: '/'})
        }
        return Promise.reject(res.data)
      }
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}
/**
 * delet方法，对应delett请求
 * @param {String} url [请求的url地址]
 * delete关键字会和vue系统关键字冲突，所以这里用delet代替
 * delete用于删除，参数一般带在url
 * @param params
 */
export const delet = (url, params) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(url, params)
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}
export const put = (url, params) => {
  return new Promise((resolve, reject) => {
    axios
      .put(url, params)
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}
/**
 * patch方法，对应patch请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 * 这里根据需求适应了formdata的格式，也可以跟post用一样的封装
 */
export const patch = (url, params) => {
  // 将数据转换为formData格式
  // 正常情况下可以直接使用参数对象进行patch，如果出错可以尝试转换form Data
  var formData = new FormData()
  formData.append('username', params.username)
  formData.append('password', params.password)
  return new Promise((resolve, reject) => {
    axios
      .patch(url, formData)
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}
