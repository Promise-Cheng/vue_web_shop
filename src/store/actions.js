import * as api from '@/api/api';

export default {
  getCompTypes(context) {
    // api.competition.getCompTypes(null).then(res => {
    //   context.commit('init', {key: 'compTypes', value: res.data.data});
    // })
  },
  getUserInfo(context) {
    const username = sessionStorage.getItem('ms_username');
    const password = sessionStorage.getItem('ms_password');
    api.index.login({loginName: username, passwordMd5: password}).then(res => {
      context.commit('init', {key: 'user', value: res.info});
      context.commit('init', {key: 'isLoaded', value: true});
    })
  },
  clearSystems(context){
    context.commit('init', {key: 'user', value: null});
    context.commit('init', {key: 'isLoaded', value: false});
  }
}
