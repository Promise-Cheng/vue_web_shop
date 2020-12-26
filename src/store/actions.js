import * as api from '@/api/api';
import md5 from "js-md5";

export default {
  getCompTypes(context) {
    // api.competition.getCompTypes(null).then(res => {
    //   context.commit('init', {key: 'compTypes', value: res.data.data});
    // })
  },
  getTokenData(context){
    const username = sessionStorage.getItem('ms_username');
    const password = sessionStorage.getItem('ms_password');
    api.index.login({loginName: username, passwordMd5: md5(password)}).then(res => {
      context.commit('init', {key: 'isLoaded', value: true});
      localStorage.setItem("token", res.data);
      api.user.getUserInfo().then(res => {
        console.log('getUserInfo',res)
        context.commit('init', {key: 'user', value: res.data});
      })
    })
  },
  clearSystems(context){
    context.commit('init', {key: 'user', value: null});
    context.commit('init', {key: 'isLoaded', value: false});
  }
}

