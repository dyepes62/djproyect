import Vue from 'vue'
import Vuex from 'vuex'

import router from '../router'
import decode from 'jwt-decode'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:'',
    usuarioDB: ''
  },
  mutations: {
    obtenerUsuario(state,payload){
      state.token = payload;
      if(payload ===''){
        state.usuarioDB='';
      }
        else{
          state.usuarioDB= decode(payload);
          if (state.usuarioDB.account === 'Admin'){
            router.push({name:'Admin'})
          } else{
            router.push({name:'Manager'})
          }
        }
      }
    
  },
  actions: {
    guardarUsuario({commit},payload){
        localStorage.setItem('token',payload);
        commit('obtenerUsuario', payload)
    },
    cerrarSesion({commit}){
      commit('obtenerUsuario', '');
      localStorage.removeItem('token');
      router.push({name: 'Login'});
    }
  },
  getters:{
    estaActivo: state=> !!state.token
  },
  modules: {
  }
})
