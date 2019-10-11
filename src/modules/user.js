import axios from 'axios'
import RepositoryFactory from '../api/RepositoryFactory'
const User = RepositoryFactory.get('users')

const state = {
    authUser:null,
}
const mutations = {
    CHANGE_AUTH_STATE:function(state,payload){
      state.authUser = payload
    }
}
const actions = {
  async login({commit},payload){
    const data =await User.login(payload)
    window.localStorage.setItem('authUser',JSON.stringify(data.data))
    commit('CHANGE_AUTH_STATE',data)
  },
  async authRemember({commit}){
    const data = await JSON.parse(window.localStorage.getItem('authUser'))
    if(data){
      commit('CHANGE_AUTH_STATE',data)
    }
  }
}
const getters = {
  getathUser(state){
    return state.authUser
  }
}

export default {
	state, mutations, actions, getters
}