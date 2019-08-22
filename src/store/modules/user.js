const state = {
  user: {},
  listPermission: {},
}

const getters = {
  _getUserInfo: state => {
    return state.user
  },
  _listPermission: state => {
    return state.listPermission
  }
}

const mutations = {
  SET_USER_INFO (state, obj) {
    state.user = obj
  },
  SET_LIST_PERMISSION (state, obj) {
    state.listPermission = obj
  }
}

const actions = {
  _ationsUserInfo (state, obj) {
    state.commit('SET_USER_INFO', obj)
  },
  _ationsListPermission (state, obj) {
    state.commit('SET_LIST_PERMISSION', obj)
  }
}

export default { 
  state,
  getters,
  mutations,
  actions
}
